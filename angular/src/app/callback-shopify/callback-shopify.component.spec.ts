import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackShopifyComponent } from './callback-shopify.component';

describe('CallbackShopifyComponent', () => {
  let component: CallbackShopifyComponent;
  let fixture: ComponentFixture<CallbackShopifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackShopifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackShopifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
