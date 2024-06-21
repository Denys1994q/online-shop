import {Component, Input, OnInit} from '@angular/core';
import {CartProductInterface} from '../../../pages/shopping-cart/models/cart-product.interface';
import {ShoppingCartService} from '../../../pages/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-mini-product-card',
  templateUrl: './mini-product-card.component.html',
  styleUrl: './mini-product-card.component.sass'
})
export class MiniProductCardComponent implements OnInit {
  @Input({required: true}) product!: CartProductInterface;
  amountValue: number = 0;
  amountValueError: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.amountValue = this.product.amount;
  }

  onAmountInputChange(event: Event): void {
    const newValue = +(event.target as HTMLInputElement).value;
    if (newValue < 1) {
      this.amountValueError = true;
      return;
    }
    this.amountValueError = false;
    this.shoppingCartService.updateProductAmount(this.product._id, newValue);
  }

  removeFromCart(): void {
    this.shoppingCartService.removeFromCart(this.product._id);
  }
}
