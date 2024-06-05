import {Injectable} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
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

  private FormControlResolver: any = {
    [FormFieldTypeEnum.Checkbox]: (formItem: FieldInterface) => {
      return formItem.options && this.fb.array(formItem.options.map(() => new FormControl(false)));
    },
    [FormFieldTypeEnum.Slider]: (formItem: FieldInterface) => {
      const formGroup = this.fb.group({});
      formItem.options &&
        formItem.options.forEach((option: OptionInterface) => {
          formGroup.addControl(option.label, this.fb.control(option.value));
        });
      return formGroup;
    },
    default: (formItem: FieldInterface) => {
      const validationErrors = formItem.validators && formItem.validators.map((validator) => validator.error);
      return this.fb.control(formItem.value || '', validationErrors);
    }
  };

  resolveFormControl(formItem: FieldInterface): AbstractControl {
    return this.FormControlResolver[formItem.type]
      ? this.FormControlResolver[formItem.type](formItem)
      : this.FormControlResolver.default(formItem);
  }

  setupFormFields(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    formConfig.fields.forEach((formItem: FieldInterface) => {
      const formControl = this.resolveFormControl(formItem);
      dynamicForm.addControl(formItem.id, formControl);
    });
  }

  resetForm(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    dynamicForm.reset();
    this.resetValuesForSliderType(dynamicForm, formConfig);
  }

  resetValuesForSliderType(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
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

  getModifiedCheckboxValues(dynamicForm: FormGroup, checkboxFields: FieldInterface[]): Object {
    return checkboxFields.reduce((acc: {[key: string]: string[] | undefined}, checkboxField: FieldInterface) => {
      if (checkboxField.options) {
        const modValue = this.transformCheckboxesArray(dynamicForm, checkboxField.id, checkboxField.options);
        acc[checkboxField.id] = modValue;
      }

      return acc;
    }, {});
  }

  transformCheckboxesArray(dynamicForm: FormGroup, checkboxFieldId: string, options: OptionInterface[]): string[] {
    const checkboxValues = dynamicForm.value[checkboxFieldId];
    const selectedOptions = checkboxValues
      .map((isChecked: boolean, index: number) => (isChecked ? options[index].label : null))
      .filter((label: string | null) => label !== null);

    return selectedOptions;
  }

  removeEmptyCheckboxFields(formValuesModified: any): Object {
    return Object.fromEntries(
      Object.entries(formValuesModified).filter(([key, value]) => {
        return Array.isArray(value) ? value.length > 0 : value;
      })
    );
  }
}
