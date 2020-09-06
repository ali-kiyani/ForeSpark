import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthShopifyComponent } from './auth-shopify.component';

describe('AuthShopifyComponent', () => {
  let component: AuthShopifyComponent;
  let fixture: ComponentFixture<AuthShopifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthShopifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthShopifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
