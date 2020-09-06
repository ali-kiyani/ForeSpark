import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedRequestDto, PagedListingComponentBase } from '@shared/paged-listing-component-base';
import { ProductDto, ProductServiceProxy, ProductDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

class PagedProductsRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  animations: [appModuleAnimation()]
})
export class ProductsComponent extends PagedListingComponentBase<ProductDto> {

  products: ProductDto[] = [];
  keyword = '';

  constructor(injector: Injector, private _productService: ProductServiceProxy, private _modalService: BsModalService) {
    super(injector);
  }

  list(request: PagedProductsRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._productService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: ProductDtoPagedResultDto) => {
        this.products = result.items;
        this.showPaging(result, pageNumber);
      });
  }
  delete(product: ProductDto): void {
    abp.message.confirm(
      this.l('ProductDeleteWarningMessage', product.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._productService
            .delete(product.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => { });
        }
      }
    );
  }

  createProduct() {
    this.showCreateOrEditProductDialog();
  }

  editProduct(product: ProductDto) {
    this.showCreateOrEditProductDialog(product.id);
  }

  showCreateOrEditProductDialog(id?: number): void {
    let createOrEditProductDialog: BsModalRef;
    if (!id) {
      createOrEditProductDialog = this._modalService.show(
        CreateProductComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditProductDialog = this._modalService.show(
        EditProductComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }
    createOrEditProductDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  getDetails(product: ProductDto) {
    this._modalService.show(
      ProductDetailsComponent,
      {
        class: 'modal-lg',
        initialState: {
          product: product
        }
      }
    );
  }
}
