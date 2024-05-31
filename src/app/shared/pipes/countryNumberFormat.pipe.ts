import {Pipe, PipeTransform} from '@angular/core';

enum LocaleFormat {
  US = 'en-US',
  UK = 'en-GB',
  DE = 'de-DE',
  FR = 'fr-FR'
}

@Pipe({
  name: 'countryNumberFormat',
  standalone: true
})
export class CountryNumberFormatPipe implements PipeTransform {
  transform(value: number, countryCode: string): string {
    if (value === null || value === undefined) return '';

    const formats = {
      US: LocaleFormat.US,
      UK: LocaleFormat.UK,
      DE: LocaleFormat.DE,
      FR: LocaleFormat.FR
    };

    const format = formats[countryCode.toUpperCase() as keyof typeof formats];
    if (!format) {
      return value.toString();
    }

    return value.toLocaleString(format);
  }
}
