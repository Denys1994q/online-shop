import {Component} from '@angular/core';
import {signInFormConfig} from './constants/sign-in-form.constant';
import {AuthService} from '../../services/auth.service';
import {DynamicFormService} from '../../services/dynamic-form.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent {
  signInFormConfig = signInFormConfig;
  errorApi!: string;

  constructor(private authService: AuthService, private dynamicFormService: DynamicFormService) {}

  onFormSubmit(values: any): void {
    this.authService.signIn(values).subscribe({
      next: () => this.dynamicFormService.resetForm(),
      error: (error) => (this.errorApi = error.error.message)
    });
  }
}
