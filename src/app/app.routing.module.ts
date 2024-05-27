import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingConstants} from './shared/constants/rouring.constant';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./shared/routes/products.routes').then((m) => m.ProductsRoutes)
  },
  {path: '**', redirectTo: RoutingConstants.PRODUCTS}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
