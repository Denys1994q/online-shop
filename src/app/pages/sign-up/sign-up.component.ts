import {Component} from '@angular/core';
import {signUpFormConfig} from './constants/sign-up-form.constant';
import {AuthService} from '../../services/auth.service';
import {DynamicFormService} from '../../services/dynamic-form.service';
import {RoutingConstants} from '../../shared/constants/rouring.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {
  signUpFormConfig = signUpFormConfig;
  errorApi!: string;

  constructor(
    private authService: AuthService,
    private dynamicFormService: DynamicFormService,
    private router: Router
  ) {}

  onFormSubmit(values: any): void {
    this.authService.signUp(values).subscribe({
      next: () => {
        this.dynamicFormService.resetForm();
        this.router.navigate([`/${RoutingConstants.PRODUCTS}`]);
      },
      error: (error) => (this.errorApi = error.error.message)
    });
  }
}
