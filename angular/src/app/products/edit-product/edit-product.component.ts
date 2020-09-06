import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent extends AppComponentBase
implements OnInit {

  saving = false;
  id: number;
  product = new ProductDto();

  @Output() onSave = new EventEmitter<any>();

  constructor( injector: Injector,
    private _productService: ProductServiceProxy,
    public bsModalRef: BsModalRef) {
      super(injector);
  }

  ngOnInit(): void {
    this._productService
    .get(this.id)
    .subscribe((result: ProductDto) => {
      this.product = result;
    });
  }

  save() {
    this.saving = true;

    const product = new ProductDto();
    product.init(this.product);

    this._productService
      .update(product)
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
