import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes = [{path: '', component: ProductsComponent}];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule]
})
export class ProductsModule {}
