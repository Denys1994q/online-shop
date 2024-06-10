import {Validators} from '@angular/forms';
import {
  DynamicFormInterface,
  FormFieldTypeEnum
} from '../../../shared/components/forms/dynamic-form/dynamic-form.model';

export const signInFormConfig: DynamicFormInterface = {
  mode: 'onSubmit',
  fields: [
    {
      id: 'email',
      label: 'Email',
      type: FormFieldTypeEnum.Text,
      validators: [Validators.required, Validators.email]
    },
    {
      id: 'password',
      label: 'Password',
      type: FormFieldTypeEnum.Text,
      validators: [Validators.required]
    }
  ]
};
