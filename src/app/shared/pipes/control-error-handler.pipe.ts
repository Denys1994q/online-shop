import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Pipe({
  name: 'controlErrorHandler',
  standalone: true
})
export class ControlErrorHandlerPipe implements PipeTransform {
  private errorResolver: any = {
    required: () => 'This field is required',
    email: () => 'Invalid email',
    twoUppercaseLetters: () => 'Password must contain at least 2 big letters',
    twoSymbols: () => 'Password must contain at least 2 symbols',
    twoLowercaseLettersValidator: () => 'Password must contain at least 2 lowercase letters',
    twoDigits: () => 'Password must contain at least 2 digits',
    passwordsNotMatch: () => 'Passwords don`t match'
  };

  public transform(errorKeys: ValidationErrors): any {
    const validatorError = Object.keys(errorKeys)[0];

    if (this.errorResolver[validatorError]) {
      return this.errorResolver[validatorError](errorKeys[validatorError]);
    }
  }
}
