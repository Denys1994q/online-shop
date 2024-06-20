import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RoutingConstants} from '../../../constants/rouring.constant';
import {RouterModule} from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import {ShoppingCartService} from '../../../../pages/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule, MatBadgeModule],
  templateUrl: './cart-button.component.html'
})
export class CartButtonComponent {
  routingConstants = RoutingConstants;

  constructor(public shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.calculateTotals()
  }
}
