import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScaleDirective} from './directives/scale.directive';
import {PermissionCheckDirective} from './directives/permissionCheck.directive';
import {CountryNumberFormatPipe} from './pipes/countryNumberFormat.pipe';
import {InternationalDatePipe} from './pipes/internationalDate.pipe';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    PrimaryButtonComponent,
    WishlistButtonComponent,
    MatProgressSpinnerModule,
    ScaleDirective,
    PermissionCheckDirective,
    CountryNumberFormatPipe,
    InternationalDatePipe
  ],
  exports: [
    ProductCardComponent,
    MatProgressSpinnerModule,
    ScaleDirective,
    PermissionCheckDirective,
    CountryNumberFormatPipe,
    InternationalDatePipe
  ]
})
export class SharedModule {}
