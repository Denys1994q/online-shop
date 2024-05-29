import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatCardModule, PrimaryButtonComponent, WishlistButtonComponent, MatProgressSpinnerModule],
  exports: [ProductCardComponent, MatProgressSpinnerModule]
})
export class SharedModule {}
