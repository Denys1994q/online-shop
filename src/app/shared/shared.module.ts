import {NgModule} from '@angular/core';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {PriceComponent} from './components/price/price.component';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [MatCardModule, PrimaryButtonComponent, WishlistButtonComponent, PriceComponent],
  exports: [ProductCardComponent]
})
export class SharedModule {}
