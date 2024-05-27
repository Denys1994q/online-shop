import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './auth-button.component.html'
})
export class AuthButtonComponent {}
