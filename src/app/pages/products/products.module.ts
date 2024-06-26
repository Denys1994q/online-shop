import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductDetailsResolver} from './services/product-details.resolver';
import {CountryNumberFormatPipe} from '../../shared/pipes/countryNumberFormat.pipe';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductDetailsResolver
    }
  }
];

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule, CountryNumberFormatPipe]
})
export class ProductsModule {}
