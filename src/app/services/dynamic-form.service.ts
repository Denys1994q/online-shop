import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  DynamicFormInterface,
  FieldInterface,
  FormFieldTypeEnum,
  OptionInterface
} from '../shared/components/forms/dynamic-form/dynamic-form.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  constructor(private fb: FormBuilder) {}

  setupFormFields(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    formConfig.fields.forEach((formItem: FieldInterface) => {
      let formControl;
      if (formItem.type === FormFieldTypeEnum.Checkbox && formItem.options) {
        const checkboxFormGroup = this.fb.group({});
        formItem.options.forEach((option: OptionInterface) => {
          checkboxFormGroup.addControl(option.value as string, this.fb.control(false));
        });
        formControl = checkboxFormGroup;
      } else if (formItem.type === FormFieldTypeEnum.Slider && formItem.options) {
        const formGroup = this.fb.group({});
        formItem.options.forEach((option: OptionInterface) => {
          formGroup.addControl(option.label, this.fb.control(option.value));
        });
        formControl = formGroup;
      } else {
        const validationErrors = formItem.validators && formItem.validators.map((validator) => validator.error);
        formControl = this.fb.control(formItem.value || '', validationErrors);
      }
      dynamicForm.addControl(formItem.id, formControl);
    });
  }

  resetForm(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    dynamicForm.reset();
    this.resetValuesForSliderType(dynamicForm, formConfig);
  }

  private resetValuesForSliderType(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    formConfig.fields.forEach((formItem: FieldInterface) => {
      if (formItem.type === FormFieldTypeEnum.Slider) {
        const id = formItem.id;
        dynamicForm.patchValue({
          [id]: {
            min: formItem.min,
            max: formItem.max
          }
        });
      }
    });
  }
}
