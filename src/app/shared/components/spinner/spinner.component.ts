import {Component, ViewEncapsulation} from '@angular/core';
import {LoaderService} from '../../../services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.sass',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) {}
}
