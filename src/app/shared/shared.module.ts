import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {FiltersComponent} from './components/forms/filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DynamicFormFieldComponent} from './components/forms/filters/dynamic-form-field/dynamic-form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [ProductCardComponent, FiltersComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    PrimaryButtonComponent,
    WishlistButtonComponent,
    DynamicFormFieldComponent,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [ProductCardComponent, FiltersComponent, MatCheckboxModule]
})
export class SharedModule {}
