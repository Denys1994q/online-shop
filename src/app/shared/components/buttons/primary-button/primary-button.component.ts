import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.sass']
})
export class PrimaryButtonComponent {
  @Input({required: true}) text!: string;
  @Input() disabled: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
