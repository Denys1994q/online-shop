import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';

const routes = [{path: '', component: ProductsComponent}];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes)]
})
export class ProductsModule {}
