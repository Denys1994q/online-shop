import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatCardModule, PrimaryButtonComponent, WishlistButtonComponent],
  exports: [ProductCardComponent]
})
export class SharedModule {}
