import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValidationInterface} from '../dynamic-form/dynamic-form.model';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: []
})
export class DynamicErrorComponent {
  @Input({required: true}) validators: ValidationInterface[] = [];
  @Input({required: true}) form!: FormGroup;
  @Input({required: true}) formItem!: string;
}
