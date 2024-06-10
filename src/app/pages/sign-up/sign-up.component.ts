import {Component} from '@angular/core';
import {signUpFormConfig} from './constants/sign-up-form.constant';
import {AuthService} from '../../services/auth.service';
import {DynamicFormService} from '../../services/dynamic-form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {
  signUpFormConfig = signUpFormConfig;
  errorApi!: string;

  constructor(private authService: AuthService, private dynamicFormService: DynamicFormService) {}

  onFormSubmit(values: any): void {
    this.authService.signUp(values).subscribe({
      next: () => this.dynamicFormService.resetForm(),
      error: (error) => (this.errorApi = error.error.message)
    });
  }
}
