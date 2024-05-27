import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cart-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './cart-btn.component.html'
})
export class CartBtnComponent {}
