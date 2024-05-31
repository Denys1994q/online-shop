import {Component, Input} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {DynamicFormFieldInterface} from './dynamic-form-field.model';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlider} from '@angular/material/slider';
import {MatSliderModule} from '@angular/material/slider';
import {FormFieldTypeEnum} from './dynamic-form-field.model';

@Component({
  selector: 'dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlider,
    MatSliderModule
  ]
})
export class DynamicFormFieldComponent {
  @Input() formItem!: DynamicFormFieldInterface;
  form!: FormGroup;
  FormFieldTypeEnum = FormFieldTypeEnum;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  updateSliderValue(event: Event, formItemId: string, control: string): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.form.get(`${formItemId}.${control}`)?.patchValue(+value);
    this.form.markAsDirty();
  }
}
