import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ProductsComponent } from './products/products.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AuthShopifyComponent } from './auth-shopify/auth-shopify.component';
import { CallbackShopifyComponent } from './callback-shopify/callback-shopify.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'products', component: ProductsComponent, data: { permission: 'Pages.Products' }, canActivate: [AppRouteGuard] },
                    { path: 'warehouse', component: WarehouseComponent, data: { permission: 'Pages.Warehouse' }, canActivate: [AppRouteGuard] },
                    { path: 'auth-shipify', component: AuthShopifyComponent, data: { permission: '' }, canActivate: [AppRouteGuard] },
                    { path: 'auth/callback', component: CallbackShopifyComponent, data: { permission: '' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
