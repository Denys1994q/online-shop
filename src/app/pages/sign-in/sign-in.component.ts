import {Component} from '@angular/core';
import {signInFormConfig} from './constants/sign-in-form.constant';
import {AuthService} from '../../services/auth.service';
import {DynamicFormService} from '../../services/dynamic-form.service';
import {RoutingConstants} from '../../shared/constants/rouring.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent {
  signInFormConfig = signInFormConfig;
  errorApi!: string;

  constructor(
    private authService: AuthService,
    private dynamicFormService: DynamicFormService,
    private router: Router
  ) {}

  onFormSubmit(values: any): void {
    this.authService.signIn(values).subscribe({
      next: () => {
        this.dynamicFormService.resetForm();
        this.router.navigate([`/${RoutingConstants.PRODUCTS}`]);
      },
      error: (error) => (this.errorApi = error.error.message)
    });
  }
}
