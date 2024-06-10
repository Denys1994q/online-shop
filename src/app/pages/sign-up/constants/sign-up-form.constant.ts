import {Validators} from '@angular/forms';
import {
  DynamicFormInterface,
  FormFieldTypeEnum
} from '../../../shared/components/forms/dynamic-form/dynamic-form.model';
import {
  twoDigitsValidator,
  twoLowercaseLettersValidator,
  twoSymbolsValidator,
  twoUppercaseLettersValidator
} from '../validation/password.validation';

export const signUpFormConfig: DynamicFormInterface = {
  mode: 'onSubmit',
  fields: [
    {
      id: 'firstName',
      label: 'FirstName',
      type: FormFieldTypeEnum.Text,
      validators: [{error: Validators.required, type: 'required', message: 'Field is required'}]
    },
    {
      id: 'lastName',
      label: 'LastName',
      type: FormFieldTypeEnum.Text,
      validators: [{error: Validators.required, type: 'required', message: 'Field is required'}]
    },
    {
      id: 'email',
      label: 'Email',
      type: FormFieldTypeEnum.Text,
      validators: [
        {error: Validators.required, type: 'required', message: 'Field is required'},
        {error: Validators.email, type: 'email', message: 'Invalid email'}
      ]
    },
    {
      id: 'phoneNumber',
      label: 'Phone number',
      type: FormFieldTypeEnum.Text
    },
    {
      id: 'password',
      label: 'Password',
      type: FormFieldTypeEnum.Text,
      validators: [
        {
          error: Validators.required,
          type: 'required',
          message: 'Field is required'
        },
        {
          error: twoUppercaseLettersValidator(),
          type: 'twoUppercaseLetters',
          message: 'Password must contain at least 2 big letters'
        },
        {
          error: twoSymbolsValidator(),
          type: 'twoSymbols',
          message: 'Password must contain at least 2 symbols'
        },
        {
          error: twoLowercaseLettersValidator(),
          type: 'twoLowercaseLetters',
          message: 'Password must contain at least 2 lowercase letters'
        },
        {
          error: twoDigitsValidator(),
          type: 'twoDigits',
          message: 'Password must contain at least 2 digits'
        }
      ]
    },
    {
      id: 'confirmPassword',
      label: 'Confirm password',
      type: FormFieldTypeEnum.ConfirmPassword
    }
  ]
};
