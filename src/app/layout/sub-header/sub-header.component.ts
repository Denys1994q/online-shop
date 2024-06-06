import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthButtonComponent} from '../../shared/components/buttons/auth-button/auth-button.component';
import {CartButtonComponent} from '../../shared/components/buttons/cart-button/cart-button.component';
import {SelectComponent} from '../../shared/components/inputs/select/select.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule, AuthButtonComponent, CartButtonComponent, SelectComponent, RouterModule],
  templateUrl: './sub-header.component.html'
})
export class SubHeaderComponent {
  categories = [
    {label: 'Sport', options: ['Football', 'Basketball']},
    {label: 'Smartphones', options: ['Iphone', 'Samsung', 'LG']},
    {label: 'Laptops', options: ['Lenovo', 'Apple']}
  ];
}
