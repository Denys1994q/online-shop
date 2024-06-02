import {Component, Input} from '@angular/core';
import {FieldInterface} from '../../forms/dynamic-form/dynamic-form.model';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  @Input() formItem!: FieldInterface;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  updateSliderValue(event: Event, formItemId: string, control: string): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.form.get(`${formItemId}.${control}`)?.patchValue(+value);
    this.form.markAsDirty();
  }
}
