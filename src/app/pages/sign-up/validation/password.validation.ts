import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return null;
    }
    const value: string = control.value || '';
    const uppercaseLetters = value.match(/[A-Z]/g) || [];
    const symbols = value.match(/[^a-zA-Z\d]/g) || [];
    const lowercaseLetters = value.match(/[a-z]/g) || [];
    const digits = value.match(/\d/g) || [];

    if (uppercaseLetters.length < 2) {
      return {twoUppercaseLetters: true};
    }
    if (symbols.length < 2) {
      return {twoSymbols: true};
    }
    if (lowercaseLetters.length < 2) {
      return {twoLowercaseLetters: true};
    }
    if (digits.length < 2) {
      return {twoDigits: true};
    }
    return null;
  };
};

export const confirmPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.parent?.get('password')?.value;
    if (control.value === null || control.value === '') {
      return null;
    }
    if (passwordControl !== control.value) {
      return {passwordsNotMatch: true};
    }
    return null;
  };
};
