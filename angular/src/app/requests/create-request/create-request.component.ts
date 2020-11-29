import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { RequestServiceProxy, RequestDto, InstallationsServiceProxy, CitiesDto, CreateRequestDto } from '@shared/service-proxies/service-proxies';
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
  request = new CreateRequestDto();
  files: File[] = [];
  cities: CitiesDto[] = [];
  selectedCity = new CitiesDto();

  @Output() onSave = new EventEmitter<any>();

  constructor( injector: Injector,
    private _requestService: RequestServiceProxy,
    public bsModalRef: BsModalRef,
    private _installationService: InstallationsServiceProxy,
    private _modalService: BsModalService) {
      super(injector);
      this.request.cityId = 0;
      this.selectedCity.lat = 33.6845867;
      this.selectedCity.lng = 73.0304453;
     }

  ngOnInit(): void {
    this._installationService.getAllCities().subscribe(result => {
      this.cities = result.items;
    });
  }

  cityChanged(value: number) {
    this.selectedCity = this.cities.find(x => x.id === Number(value));
  }

  save() {
    this.saving = true;
    const formData = new FormData();
    formData.append('requestForm', JSON.stringify(this.request));
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
        initialState: {
          lat: this.selectedCity.lat,
          lng: this.selectedCity.lng
        }
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