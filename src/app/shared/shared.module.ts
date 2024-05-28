import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {FiltersComponent} from './components/forms/filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ProductCardComponent, FiltersComponent],
  imports: [
    MatIconButton,
    MatIconModule,
    CommonModule,
    MatCardModule,
    PrimaryButtonComponent,
    WishlistButtonComponent,
    ReactiveFormsModule
  ],
  exports: [ProductCardComponent, FiltersComponent]
})
export class SharedModule {}
