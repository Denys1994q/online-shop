import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../../../../services/auth.service';
import {RoutingConstants} from '../../../constants/rouring.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate([`/${RoutingConstants.SIGN_IN}`]));
  }
}
