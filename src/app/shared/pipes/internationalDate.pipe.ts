import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'internationalDate',
  standalone: true
})
export class InternationalDatePipe implements PipeTransform {
  transform(value: Date, locale: string = 'en-US'): string | null {
    const datePipe = new DatePipe(locale);
    return datePipe.transform(value, 'dd MMMM yyyy');
  }
}
