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
  id: string;
  label: string;
  type: FormFieldTypeEnum;
  options?: OptionInterface[];
  value?: string | OptionInterface[] | number[];
  validators?: ValidationInterface[];
  min?: number;
  max?: number;
}

export interface DynamicFormInterface {
  mode: 'onChange' | 'onSubmit';
  resetBtn?: boolean;
  fields: FieldInterface[];
}
