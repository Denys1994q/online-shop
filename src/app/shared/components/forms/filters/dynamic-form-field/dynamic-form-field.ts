import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {DynamicFormFieldModel} from './dynamic-form-field.model';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormFieldComponent {
  @Input() formItem!: DynamicFormFieldModel;
  form!: FormGroup;
  // toppings = this.fb.group({
  //   pepperoni: false,
  //   extracheese: false,
  //   mushroom: false
  // });

  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {
    this.form = this.rootFormGroup.control;
  }
}
