import {ValidatorFn} from '@angular/forms';

export enum FormFieldTypeEnum {
  Text = 'text',
  Select = 'select',
  Checkbox = 'checkbox',
  Slider = 'slider',
  ConfirmPassword = 'confirm password'
}

export interface OptionInterface {
  label: string;
  value: number | string;
}

export interface FieldInterface {
  defaultValues?: string[];
  id: string;
  label: string;
  type: FormFieldTypeEnum;
  options?: OptionInterface[];
  value?: string | OptionInterface[] | number[];
  validators?: ValidatorFn[];
  min?: number;
  max?: number;
  iconLabel?: string;
}

export interface DynamicFormInterface {
  mode: 'onChange' | 'onSubmit';
  resetButton?: boolean;
  fields: FieldInterface[];
}
