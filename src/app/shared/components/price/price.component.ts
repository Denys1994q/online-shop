import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html'
})
export class PriceComponent {
  @Input() priceAfterDiscount!: number;
  @Input() priceWithoutDiscount!: number;
}
