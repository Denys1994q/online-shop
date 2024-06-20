import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from './services/shopping-cart.service';
import {CartProductInterface} from './models/cart-product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: []
})
export class ShoppingCartComponent implements OnInit {
  constructor(public shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
   this.shoppingCartService.getCartProducts();
  }
}
