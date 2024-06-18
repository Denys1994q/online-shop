import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  constructor(private router: Router) {}

  createSearchParams(values: any): void {
    console.log(values);
    const queryParams: any = {};
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (Array.isArray(value)) {
        queryParams[key] = value.join(';');
      } else if (typeof value === 'object' && value !== null) {
        queryParams[key] = [value.min, value.max].join(';');
      } else {
        queryParams[key] = value;
      }
    });
    console.log(queryParams);
    this.router.navigate([], {queryParams});
  }
}
