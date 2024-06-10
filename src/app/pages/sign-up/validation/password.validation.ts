import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const twoUppercaseLettersValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return null;
    }
    const value: string = control.value || '';
    const uppercaseLetters = value.match(/[A-Z]/g) || [];
    if (uppercaseLetters.length < 2) {
      return {twoUppercaseLetters: true};
    }

    return null;
  };
};

export const twoSymbolsValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return null;
    }
    const value: string = control.value || ''; 
    const symbols = value.match(/[^a-zA-Z\d]/g) || []; 
    if (symbols.length < 2) {
      return {twoSymbols: true}; 
    }

    return null; 
  };
};

export const twoLowercaseLettersValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return null;
    }
    const value: string = control.value || '';
    const lowercaseLetters = value.match(/[a-z]/g) || [];
    if (lowercaseLetters.length < 2) {
      return {twoLowercaseLetters: true};
    }

    return null;
  };
};

export const twoDigitsValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === '') {
      return null;
    }
    const value: string = control.value || '';
    const digits = value.match(/\d/g) || [];
    if (digits.length < 2) {
      return {twoDigits: true};
    }

    return null;
  };
};
