import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { WarehouseServiceProxy, WarehouseDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent extends AppComponentBase
implements OnInit {

  saving = false;
  id: number;
  warehouse = new WarehouseDto();

  @Output() onSave = new EventEmitter<any>();

  constructor( injector: Injector,
    private _warehouseService: WarehouseServiceProxy,
    public bsModalRef: BsModalRef) {
      super(injector);
  }

  ngOnInit(): void {
    this._warehouseService
    .get(this.id)
    .subscribe((result: WarehouseDto) => {
      this.warehouse = result;
    });
  }

  save() {
    this.saving = true;

    const warehouse = new WarehouseDto();
    warehouse.init(this.warehouse);

    this._warehouseService
      .update(warehouse)
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
