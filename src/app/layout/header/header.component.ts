import {Component} from '@angular/core';
import {NavMenuComponent} from '../nav-menu/nav-menu.component';
import {SubHeaderComponent} from '../sub-header/sub-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, SubHeaderComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  navMenuItems = [
    {label: 'Blog', to: '#'},
    {label: 'About Us', to: '#'},
    {label: 'Careers', to: '#'}
  ]

}
