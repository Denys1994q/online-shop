import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: []
})
export class DynamicErrorComponent {
  @Input({required: true}) formItem!: any;
}
