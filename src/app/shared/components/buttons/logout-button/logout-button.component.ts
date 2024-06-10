import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout().subscribe();
  }
}
