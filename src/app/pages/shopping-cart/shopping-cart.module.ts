import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart.component';
import { CountryNumberFormatPipe } from "../../shared/pipes/countryNumberFormat.pipe";

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
];

@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule, CountryNumberFormatPipe]
})
export class ShoppingCartModule {}
