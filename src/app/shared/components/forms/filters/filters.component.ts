import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicFormFieldModel} from './dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: []
})
export class FiltersComponent implements OnInit {
  myForm!: FormGroup;
  @Input() formFields: DynamicFormFieldModel[] = [];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
  }

  ngOnInit() {
    console.log(this.myForm);
    this.setupFormFields();
  }

  setupFormFields() {
    // this.formFields.forEach((formItem: any) => {
    //   let formControl;
    //   formControl = this.fb.control(formItem.value || '', formItem.validators);
    //   this.myForm.addControl(formItem.id, formControl);
    // });
    this.formFields.forEach((formItem: any) => {
      let formControl;
      if (formItem.type === 'checkbox') {
        // Для чекбоксів створюємо FormGroup, який буде містити контроли для кожного чекбоксу
        const checkboxFormGroup = this.fb.group({});
        formItem.checkboxOptions.forEach((option: any) => {
          // Додаємо контроли для кожного чекбоксу до FormGroup
          checkboxFormGroup.addControl(option.value, this.fb.control(false)); // Встановлюємо значення за замовчуванням false
        });
        formControl = checkboxFormGroup;
      } else {
        formControl = this.fb.control(formItem.value || '', formItem.validators);
      }
      this.myForm.addControl(formItem.id, formControl);
      console.log(this.myForm);
    });
  }

  onSubmit() {
    console.log('on submit', this.myForm.value);
  }
}
