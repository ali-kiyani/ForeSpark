import { Component, OnInit, Injector, Input } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductServiceProxy, ProductDto, ProductDetailsDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent extends AppComponentBase
implements OnInit {

  product: ProductDto;
  productDetails = new ProductDetailsDto();
  loaded = false;

  constructor( injector: Injector,
    private _productService: ProductServiceProxy,
    public bsModalRef: BsModalRef) {
      super(injector);
     }

  ngOnInit(): void {
    this._productService.getProductDetails(this.product.id)
    .subscribe((result: ProductDetailsDto) => {
      this.productDetails = result;
      this.loaded = true;
      debugger;
    });
  }

}
