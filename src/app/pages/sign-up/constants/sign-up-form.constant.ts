import {Validators} from '@angular/forms';
import {
  DynamicFormInterface,
  FormFieldTypeEnum
} from '../../../shared/components/forms/dynamic-form/dynamic-form.model';
import {confirmPasswordValidator, passwordValidator} from '../validation/password.validation';

export const signUpFormConfig: DynamicFormInterface = {
  mode: 'onSubmit',
  fields: [
    {
      id: 'firstName',
      label: 'FirstName',
      type: FormFieldTypeEnum.Text,
      validators: [Validators.required]
    },
    {
      id: 'lastName',
      label: 'LastName',
      type: FormFieldTypeEnum.Text,
      validators: [Validators.required]
    },
    {
      id: 'email',
      label: 'Email',
      type: FormFieldTypeEnum.Text,
      validators: [Validators.required, Validators.email]
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
      validators: [Validators.required, passwordValidator()]
    },
    {
      id: 'confirmPassword',
      label: 'Confirm password',
      type: FormFieldTypeEnum.ConfirmPassword,
      validators: [Validators.required, confirmPasswordValidator()]
    }
  ]
};
