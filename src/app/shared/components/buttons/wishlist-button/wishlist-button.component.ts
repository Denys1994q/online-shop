import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './wishlist-button.component.html'
})
export class WishlistButtonComponent {}
