import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldInterface} from '../../forms/dynamic-form/dynamic-form.model';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent {
  @Input() form!: FormGroup;
  @Input() formItem!: FieldInterface;
  hidePassword = true;

  togglePassword(event: MouseEvent) {
    this.hidePassword = !this.hidePassword;
    event.stopPropagation();
  }
}
