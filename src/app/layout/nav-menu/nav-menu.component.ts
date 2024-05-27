import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

interface NavMenuItemsInterface {
  label: string;
  to: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  templateUrl: './nav-menu.component.html',
  imports: [CommonModule]
})
export class NavMenuComponent {
  @Input() items!: NavMenuItemsInterface[];
}
