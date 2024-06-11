import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicFormInterface} from './dynamic-form.model';
import {Subject, debounceTime, distinctUntilChanged, takeUntil} from 'rxjs';
import {DynamicFormService} from '../../../../services/dynamic-form.service';
import {FormFieldTypeEnum} from './dynamic-form.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: []
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  dynamicForm!: FormGroup;
  @Input({required: true}) formConfig!: DynamicFormInterface;
  @Output() formChange = new EventEmitter<any>();
  @Output() formSubmit = new EventEmitter<any>();
  unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dynamicFormService: DynamicFormService) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit() {
    this.dynamicFormService.setupFormFields(this.dynamicForm, this.formConfig);
    if (this.formConfig.mode === 'onChange') {
      this.dynamicForm.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.handleFormValueChanges();
        });
    }
    this.validateConfirmPasswordOnChange();
  }

  handleFormValueChanges() {
    const checkboxFields = this.formConfig.fields.filter((field) => field.type === FormFieldTypeEnum.Checkbox);
    const modifiedValues = this.dynamicFormService.getModifiedCheckboxValues(this.dynamicForm, checkboxFields);
    const formValuesModified = {
      ...this.dynamicForm.value,
      ...modifiedValues
    };
    const onlyFieldsWithValue = this.dynamicFormService.removeEmptyCheckboxFields(formValuesModified);
    this.formChange.emit(onlyFieldsWithValue);
  }

  validateConfirmPasswordOnChange(): void {
    const passwordField = this.dynamicForm.get('password');
    if (!passwordField) return;
    passwordField.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      const confirmPasswordField = this.dynamicForm.get('confirmPassword');
      if (confirmPasswordField) {
        confirmPasswordField.updateValueAndValidity();
      }
    });
  }

  onSubmit(): void {
    this.formSubmit.emit(this.dynamicForm.value);
  }

  resetForm(): void {
    this.dynamicFormService.resetForm();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
