import {ValidatorFn} from '@angular/forms';

export enum FormFieldTypeEnum {
  Text = 'text',
  Select = 'select',
  Checkbox = 'checkbox',
  Slider = 'slider'
}

export interface OptionInterface {
  label: string;
  value: number | string;
}

export interface ValidationInterface {
  error: ValidatorFn;
  type: string;
  message: string;
}

export interface FieldInterface {
  defaultValues: any;
  id: string;
  label: string;
  type: FormFieldTypeEnum;
  options?: OptionInterface[];
  value?: string | OptionInterface[] | number[];
  validators?: ValidationInterface[];
  min?: number;
  max?: number;
  iconLabel?: string;
}

export interface DynamicFormInterface {
  mode: 'onChange' | 'onSubmit';
  resetButton?: boolean;
  fields: FieldInterface[];
}
