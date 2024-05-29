import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'internationalDate',
  standalone: true
})
export class InternationalDatePipe implements PipeTransform {
  transform(value: Date, locale: string = 'en-US'): string {
    const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Intl.DateTimeFormat(locale, options).format(value);
  }
}
