import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-auth-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './auth-btn.component.html'
})
export class AuthBtnComponent {}
