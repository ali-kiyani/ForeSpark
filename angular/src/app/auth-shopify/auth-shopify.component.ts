import { Component, OnInit, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponentBase } from '@shared/app-component-base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-shopify',
  templateUrl: './auth-shopify.component.html',
  styleUrls: ['./auth-shopify.component.css']
})
export class AuthShopifyComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private http: HttpClient, private router: Router) {
    super(injector);
   }

  ngOnInit(): void {
    /*const res = this.http.get('https://google.com').subscribe((res: any) => {
      debugger;
    });*/
    const http = new XMLHttpRequest();
    http.open('GET', 'https://www.google.com');
    http.onreadystatechange = null;
    http.send();
    http.onload = () => console.log(http.response);
   /* console.log('redirected');
    this.router.navigate(['https://vaio-dell-mac.myshopify.com/admin/oauth/authorize?client_id=d256b63984e7d7e838344aa8fc7a6f3f&scope=write_orders,read_customers&redirect_uri=http://127.0.0.1:4200/auth/callback&state=1']);
  */
  }

}
