import {Component, Input} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {FieldInterface, FormFieldTypeEnum} from '../dynamic-form/dynamic-form.model';

@Component({
  selector: 'dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent {
  @Input() formItem!: FieldInterface;
  form!: FormGroup;
  FormFieldTypeEnum = FormFieldTypeEnum;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }
}
