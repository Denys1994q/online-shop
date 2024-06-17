import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoutButtonComponent} from '../../shared/components/buttons/logout-button/logout-button.component';
import {CartButtonComponent} from '../../shared/components/buttons/cart-button/cart-button.component';
import {SelectComponent} from '../../shared/components/inputs/select/select.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule, LogoutButtonComponent, CartButtonComponent, SelectComponent, RouterModule],
  templateUrl: './sub-header.component.html'
})
export class SubHeaderComponent {
  categories = [
    {label: 'Sport', options: ['Football', 'Basketball']},
    {label: 'Smartphones', options: ['Iphone', 'Samsung', 'LG']},
    {label: 'Laptops', options: ['Lenovo', 'Apple']}
  ];
}
