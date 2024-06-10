import {Injectable} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
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
    [FormFieldTypeEnum.Checkbox]: (formItem: FieldInterface) => {
      return formItem.options && this.fb.array(formItem.options.map(() => new FormControl(false)));
    },
    [FormFieldTypeEnum.Slider]: (formItem: FieldInterface) => {
      const formGroup: any = this.fb.group({});
      formItem.options &&
        formItem.options.forEach((option: OptionInterface) => {
          formGroup.addControl(option.label, this.fb.control(option.value));
        });
        formGroup.controls.max.defaultValue = formItem.max
        formGroup.controls.min.defaultValue = formItem.min
      return formGroup;
    },
    default: (formItem: FieldInterface) => {
      const validationErrors: any = formItem.validators && formItem.validators.map((validator) => validator.error);
      return this.fb.control(
        formItem.value || '',
        formItem.type === FormFieldTypeEnum.ConfirmPassword
          ? [Validators.required, this.confirmPasswordValidator()]
          : validationErrors
      );
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
    this.form = dynamicForm;
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

  confirmPasswordValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === null || control.value === '') {
        return null;
      }
      if (this.form) {
        const passwordControl = this.form.controls['password'].value;
        if (passwordControl !== control.value) {
          return {passwordsNotMatch: 'Passwords don`t match'};
        }
      }

      return null;
    };
  };
}
