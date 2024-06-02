import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicFormInterface} from './dynamic-form.model';
import {Subject, debounceTime, takeUntil} from 'rxjs';
import {DynamicFormService} from '../../../../services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: []
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  dynamicForm!: FormGroup;
  @Input({required: true}) formConfig!: DynamicFormInterface;
  @Output() formChange = new EventEmitter<any>();
  @Output() formSubmit = new EventEmitter<any>();
  unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dynamicFormService: DynamicFormService) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit() {
    this.dynamicFormService.setupFormFields(this.dynamicForm, this.formConfig);
    if (this.formConfig.mode === 'onChange') {
      this.dynamicForm.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(500)).subscribe(() => {
        this.emitFormValuesOnChange();
      });
    }
  }

  private emitFormValuesOnChange(): void {
    this.formChange.emit(this.dynamicForm.value);
  }

  private emitFormValuesOnSubmit(): void {
    this.formSubmit.emit(this.dynamicForm.value);
  }

  onSubmit(): void {
    this.emitFormValuesOnSubmit();
  }

  resetForm(): void {
    this.dynamicFormService.resetForm(this.dynamicForm, this.formConfig);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
