import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { MapComponent } from '@app/map/map.component';
import { AppComponentBase } from '@shared/app-component-base';
import { CitiesDto, CreateInstallationsDto, InstallationsDto, InstallationsServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-installation',
  templateUrl: './create-installation.component.html',
  styleUrls: ['./create-installation.component.css']
})
export class CreateInstallationComponent extends AppComponentBase implements OnInit {

  saving = false;
  installation = new CreateInstallationsDto();
  cities: CitiesDto[] = [];
  isActive = false;

  @Output() onSave = new EventEmitter<any>();

  constructor(injector: Injector,
    private _installationService: InstallationsServiceProxy,
    public bsModalRef: BsModalRef,
    private _modalService: BsModalService) {
      super(injector);
    }

  ngOnInit(): void {
    this._installationService.getAllCities().subscribe(result => {
      this.cities = result.items;
    });
  }

  save() {
    this.saving = true;
    if (this.isActive === false) {
      this.installation.status = 0;
    } else {
      this.installation.status = 1;
    }
    this._installationService
      .create(this.installation)
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
      this.installation.lat = latlng.lat;
      this.installation.lng = latlng.lng;
    });
  }
}