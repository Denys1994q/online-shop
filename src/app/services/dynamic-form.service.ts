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
  form!: FormGroup;

  private FormControlResolver: any = {
    [FormFieldTypeEnum.Checkbox]: (formItem: FieldInterface) => this.createCheckboxControl(formItem),
    [FormFieldTypeEnum.Slider]: (formItem: FieldInterface) => this.createSliderControl(formItem),
    default: (formItem: FieldInterface) => {
      const validationErrors: any = formItem.validators && formItem.validators.map((validator) => validator);
      return this.fb.control(formItem.value || '', validationErrors);
    }
  };

  resolveFormControl(formItem: FieldInterface): AbstractControl {
    return this.FormControlResolver[formItem.type]
      ? this.FormControlResolver[formItem.type](formItem)
      : this.FormControlResolver.default(formItem);
  }

  setupFormFields(dynamicForm: FormGroup, formConfig: DynamicFormInterface): void {
    this.form = dynamicForm;
    formConfig.fields.forEach((formItem: FieldInterface) => {
      formItem.defaultValues && this.form.markAsDirty();
      const formControl = this.resolveFormControl(formItem);
      dynamicForm.addControl(formItem.id, formControl);
    });
  }

  resetForm(): void {
    this.form.reset();
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
      .map((isChecked: boolean, index: number) => (isChecked ? options[index].value : null))
      .filter((value: string | null) => value !== null);

    return selectedOptions;
  }

  removeEmptyCheckboxFields(formValuesModified: Record<string, any>): Record<string, any> {
    return Object.fromEntries(
      Object.entries(formValuesModified).filter(([_, value]) => {
        return Array.isArray(value) ? value.length > 0 : value;
      })
    );
  }

  createCheckboxControl(formItem: any): any {
    return this.fb.array(
      formItem.options.map((option: any) => {
        const isChecked = formItem.defaultValues?.includes(option.value.toString()) || false;
        return new FormControl(isChecked);
      })
    );
  }

  createSliderControl(formItem: any): any {
    const formGroup: any = this.fb.group({});
    formItem.options?.forEach((option: OptionInterface, index: number) => {
      const controlValue = formItem.defaultValues ? +formItem.defaultValues[index] : option.value
      formGroup.addControl(
        option.label,
        this.fb.control(controlValue)
      );
      formGroup.controls[option.label].defaultValue = formItem[option.label as keyof FieldInterface];
    });

    return formGroup;
  }
}
