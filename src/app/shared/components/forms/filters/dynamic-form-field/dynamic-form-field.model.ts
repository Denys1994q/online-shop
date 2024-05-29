import {ValidatorFn} from '@angular/forms';

export type DynamicFormFieldModelType = 'text' | 'select' | 'checkbox';

export interface SelectMenuOption {
  label: string;
  value: string;
}

export interface DynamicFormFieldModel {
  id: string;
  label: string;
  type: DynamicFormFieldModelType;
  selectMenuOptions?: SelectMenuOption[];
  checkboxOptions?: SelectMenuOption[];
  value?: string | SelectMenuOption[];
  validators?: ValidatorFn[];
}
