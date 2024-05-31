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

export interface DynamicFormFieldInterface {
  id: string;
  label: string;
  type: FormFieldTypeEnum;
  options?: OptionInterface[];
  value?: string | OptionInterface[] | number[];
  validators?: ValidatorFn[];
  min?: number;
  max?: number;
}
