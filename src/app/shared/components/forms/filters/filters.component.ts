import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicFormFieldInterface} from '../dynamic-form-field/dynamic-form-field.model';
import {Subject, debounceTime, takeUntil} from 'rxjs';
import {OptionInterface} from '../dynamic-form-field/dynamic-form-field.model';
import {FormFieldTypeEnum} from '../dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: []
})
export class FiltersComponent implements OnInit, OnDestroy {
  filtersForm!: FormGroup;
  @Input() formFields: DynamicFormFieldInterface[] = [];
  @Output() filterChange = new EventEmitter<any>();
  unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({});
  }

  ngOnInit() {
    this.setupFormFields();
    this.filtersForm.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(500)).subscribe(() => {
      this.emitFilters();
    });
  }

  setupFormFields() {
    this.formFields.forEach((formItem: DynamicFormFieldInterface) => {
      let formControl;
      if (formItem.type === FormFieldTypeEnum.Checkbox && formItem.options) {
        const checkboxFormGroup = this.fb.group({});
        formItem.options.forEach((option: OptionInterface) => {
          checkboxFormGroup.addControl(option.value as string, this.fb.control(false));
        });
        formControl = checkboxFormGroup;
      } else if (formItem.type === FormFieldTypeEnum.Slider && formItem.options) {
        const formGroup = this.fb.group({});
        formItem.options.forEach((option: any) => {
          formGroup.addControl(option.label, this.fb.control(option.value));
        });
        formControl = formGroup;
      } else {
        formControl = this.fb.control(formItem.value || '', formItem.validators);
      }
      this.filtersForm.addControl(formItem.id, formControl);
    });
  }

  private emitFilters(): void {
    this.filterChange.emit(this.filtersForm.value);
  }

  resetForm(): void {
    this.filtersForm.reset();
    this.resetValuesForSliderType();
  }

  private resetValuesForSliderType(): void {
    this.formFields.forEach((formItem: DynamicFormFieldInterface) => {
      if (formItem.type === FormFieldTypeEnum.Slider) {
        const id = formItem.id;
        this.filtersForm.patchValue({
          [id]: {
            min: formItem.min,
            max: formItem.max
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
