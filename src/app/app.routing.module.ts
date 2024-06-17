import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingConstants} from './shared/constants/rouring.constant';
import {isLoggedIn} from './services/guards/isLoggedIn.guard';
import {isNotLoggedIn} from './services/guards/isNotLoggedIn.guard';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingConstants.PRODUCTS,
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [isLoggedIn],
    component: LayoutComponent,
    children: [
      {
        path: RoutingConstants.PRODUCTS,
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
      }
    ]
  },
  {
    path: RoutingConstants.SIGN_IN,
    canActivate: [isNotLoggedIn],
    loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule)
  },
  {
    path: RoutingConstants.SIGN_UP,
    canActivate: [isNotLoggedIn],
    loadChildren: () => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  {path: '**', redirectTo: RoutingConstants.PRODUCTS}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
