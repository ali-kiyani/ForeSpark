import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ProductServiceProxy, CreateProductDto, ProductDto, CreateRoleDto, WarehouseDto, WarehouseServiceProxy, WarehouseProductsDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';

class WarehouseMeta {
  warehouseProduct: WarehouseProductsDto;
  selected = false;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent extends AppComponentBase
implements OnInit {
 
  saving = false;
  product = new ProductDto();
  warehouses: WarehouseDto[] = [];
  defaultWarehouseCheckedStatus = false;
  files: File[] = [];
  checkedWarehousesMap: { [key: number]: WarehouseMeta } = {};

  @Output() onSave = new EventEmitter<any>();

  constructor( injector: Injector,
    private _productService: ProductServiceProxy,
    private _warehouseService: WarehouseServiceProxy,
    public bsModalRef: BsModalRef) {
      super(injector);
     }

  ngOnInit(): void {
    this._warehouseService.getAllWarehouses()
    .subscribe((result: WarehouseDto[]) => {
      this.warehouses = result;
      this.initWarehouseMeta();
    });
  }

  initWarehouseMeta() {
    _.map(this.warehouses, (item) => {
      const warehouseMeta = new WarehouseMeta();
      warehouseMeta.warehouseProduct = new WarehouseProductsDto();
      warehouseMeta.warehouseProduct.warehouseId = item.id;
      warehouseMeta.selected = false;
      warehouseMeta.warehouseProduct.totalStock = 0;
      this.checkedWarehousesMap[item.id] = warehouseMeta;
    });
  }

  isWarehouseChecked(warehouseName: string): boolean {
    // just return default permission checked status
    // it's better to use a setting
    return this.defaultWarehouseCheckedStatus;
  }

  onWarehouseChange(warehouse: WarehouseDto, $event) {
    this.checkedWarehousesMap[warehouse.id].selected = $event.target.checked;
  }

  quantityChanged(warehouseId: number, $event) {
    this.checkedWarehousesMap[warehouseId].warehouseProduct.totalStock = $event.target.value;
  }

  filterWarehouseProducts() {
    const warehouseProducts: WarehouseProductsDto[] = [];
    _.forEach(this.checkedWarehousesMap, function (value, key) {
      if (value.selected) {
        warehouseProducts.push(value.warehouseProduct);
      }
    });
    return warehouseProducts;
  }

  save() {
    this.saving = true;

    const product = new CreateProductDto();
    product.init(this.product);
    product.warehouseProducts = this.filterWarehouseProducts();
    const formData = new FormData();
    formData.append('productForm', JSON.stringify(product));
    for(let i = 0; i < this.files.length; i++) {
      formData.append('image_' + i, this.files[i], this.files[i].name);
    }

    this._productService
      .createNewProduct(formData)
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
    debugger;
    this.files = $event.target.files;
    /*$event.target.files.forEach(file => {
      this.files.push(file);
    });*/
  }
}
/*
    createNewProduct(formDate: FormData): Observable<ProductDto> {
      let url_ = this.baseUrl + "/api/Product/CreateNewProduct";
      url_ = url_.replace(/[?&]$/, "");

      let options_ : any = {
          observe: "response",
          responseType: "blob",
          headers: new HttpHeaders({
              "Accept": "text/plain"
          })
      };

      return this.http.post( url_, formDate, options_).pipe(_observableMergeMap((response_ : any) => {
          return this.processCreateNewProduct(response_);
      })).pipe(_observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
              try {
                  return this.processCreateNewProduct(<any>response_);
              } catch (e) {
                  return <Observable<ProductDto>><any>_observableThrow(e);
              }
          } else
              return <Observable<ProductDto>><any>_observableThrow(response_);
      }));
  }*/