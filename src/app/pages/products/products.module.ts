import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';

const routes = [{path: '', component: ProductsComponent}];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), SharedModule, MatProgressSpinnerModule, ReactiveFormsModule]
})
export class ProductsModule {}
