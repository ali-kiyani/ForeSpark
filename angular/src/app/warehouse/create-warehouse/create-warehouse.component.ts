import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { WarehouseServiceProxy, WarehouseDto, CreateWarehouseDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent extends AppComponentBase
implements OnInit {

  saving = false;
  warehouse = new WarehouseDto();
  @Output() onSave = new EventEmitter<any>();

  constructor(injector: Injector,
    private _warehouseService: WarehouseServiceProxy,
    public bsModalRef: BsModalRef) {
      super(injector);
     }

  ngOnInit(): void {
  }

  save() {
    this.saving = true;

    const warehouse = new CreateWarehouseDto();
    warehouse.init(this.warehouse);

    this._warehouseService
      .create(warehouse)
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

}
