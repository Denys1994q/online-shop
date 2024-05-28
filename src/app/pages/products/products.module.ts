import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes = [{path: '', component: ProductsComponent}];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), SharedModule]
})
export class ProductsModule {}
