import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthBtnComponent} from '../../btns/auth-btn/auth-btn.component';
import {CartBtnComponent} from '../../btns/cart-btn/cart-btn.component';
import {SelectComponent} from '../../inputs/select/select.component';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule, AuthBtnComponent, CartBtnComponent, SelectComponent],
  templateUrl: './sub-header.component.html'
})
export class SubHeaderComponent {
  categories = [
    {label: 'Sport', options: ['Football', 'Basketball']},
    {label: 'Smartphones', options: ['Iphone', 'Samsung', 'LG']},
    {label: 'Laptops', options: ['Lenovo', 'Apple']}
  ];
}
