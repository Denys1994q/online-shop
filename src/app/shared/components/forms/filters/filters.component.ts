import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: []
})
export class FiltersComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log(value); // Виводимо значення форми у консоль при зміні
    });
  }

  onSubmit(): void {
    console.log(this.registerForm.value, this.registerForm.invalid);
  }
}
