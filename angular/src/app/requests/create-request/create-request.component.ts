import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { RequestServiceProxy, RequestDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { MapComponent } from '@app/map/map.component';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent extends AppComponentBase
implements OnInit {

  saving = false;
  request = new RequestDto();
  files: File[] = [];

  @Output() onSave = new EventEmitter<any>();

  constructor( injector: Injector,
    private _requestService: RequestServiceProxy,
    public bsModalRef: BsModalRef,
    private _modalService: BsModalService) {
      super(injector);
     }

  ngOnInit(): void {
  }

  save() {
    this.saving = true;

    const request = new RequestDto();
    request.init(this.request);
    const formData = new FormData();
    formData.append('requestForm', JSON.stringify(request));
    for(let i = 0; i < this.files.length; i++) {
      formData.append('image_' + i, this.files[i], this.files[i].name);
    }

    this._requestService
      .createNewRequest(formData)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      });
  }

  onFileChanged($event) {
    this.files = $event.target.files;
  }

  pointLocationOnMap()
  {
    let createOrEditRequestDialog: BsModalRef;
    createOrEditRequestDialog = this._modalService.show(
      MapComponent,
      {
        class: 'modal-lg',
      }
    );
    createOrEditRequestDialog.content.onSave.subscribe((latlng) => {
      this.request.lat = latlng.lat;
      this.request.lng = latlng.lng;
    });
  }
}
/*
    createNewRequest(formDate: FormData): Observable<RequestDto> {
      let url_ = this.baseUrl + "/api/Request/CreateNewRequest";
      url_ = url_.replace(/[?&]$/, "");

      let options_ : any = {
          observe: "response",
          responseType: "blob",
          headers: new HttpHeaders({
              "Accept": "text/plain"
          })
      };

      return this.http.post( url_, formDate, options_).pipe(_observableMergeMap((response_ : any) => {
          return this.processCreateNewRequest(response_);
      })).pipe(_observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
              try {
                  return this.processCreateNewRequest(<any>response_);
              } catch (e) {
                  return <Observable<RequestDto>><any>_observableThrow(e);
              }
          } else
              return <Observable<RequestDto>><any>_observableThrow(response_);
      }));
  }*/