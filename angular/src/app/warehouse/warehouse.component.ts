import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedRequestDto, PagedListingComponentBase } from '@shared/paged-listing-component-base';
import { WarehouseDto, WarehouseServiceProxy, WarehouseDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { EditWarehouseComponent } from './edit-warehouse/edit-warehouse.component';

class PagedWarehousesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  animations: [appModuleAnimation()]
})
export class WarehouseComponent extends PagedListingComponentBase<WarehouseDto> {

  warehouses: WarehouseDto[] = [];
  keyword = '';

  constructor(injector: Injector, private _warehouseService: WarehouseServiceProxy, private _modalService: BsModalService) { 
    super(injector);
  }

  list(request: PagedWarehousesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._warehouseService
    .getAll(request.keyword, request.skipCount, request.maxResultCount)
    .pipe(
      finalize(() => {
        finishedCallback();
      })
    )
    .subscribe((result: WarehouseDtoPagedResultDto) => {
      this.warehouses = result.items;
      this.showPaging(result, pageNumber);
    });
  }
  delete(warehouse: WarehouseDto): void {
    abp.message.confirm(
      this.l('WarehouseDeleteWarningMessage', warehouse.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._warehouseService
            .delete(warehouse.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

  createWarehouse() {
    this.showCreateOrEditWarehouseDialog();
  }

  editWarehouse(warehouse: WarehouseDto) {
    this.showCreateOrEditWarehouseDialog(warehouse.id);
  }

  showCreateOrEditWarehouseDialog(id?: number): void {
    let createOrEditWarehouseDialog: BsModalRef;
    if (!id) {
      createOrEditWarehouseDialog = this._modalService.show(
        CreateWarehouseComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditWarehouseDialog = this._modalService.show(
        EditWarehouseComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }
    createOrEditWarehouseDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

}
