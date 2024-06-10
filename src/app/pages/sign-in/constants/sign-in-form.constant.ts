import {Validators} from '@angular/forms';
import {DynamicFormInterface,FormFieldTypeEnum} from '../../../shared/components/forms/dynamic-form/dynamic-form.model';

export const signInFormConfig: DynamicFormInterface = {
  mode: 'onSubmit',
  fields: [
    {
      id: 'email',
      label: 'Email',
      type: FormFieldTypeEnum.Text,
      validators: [
        {error: Validators.required, type: 'required', message: 'Email is required'},
        {error: Validators.email, type: 'email', message: 'Invalid email'}
      ]
    },
    {
      id: 'password',
      label: 'Password',
      type: FormFieldTypeEnum.Text,
      validators: [
        {error: Validators.required, type: 'required', message: 'Password is required'},
      ]
    }
  ]
};
