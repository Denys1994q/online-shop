import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  constructor(private router: Router) {}

  createSearchParams(values: any): void {
    const queryParams: any = {};
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (Array.isArray(value)) {
        queryParams[key] = value.join(';');
      } else if (typeof value === 'object' && value !== null) {
        queryParams[key] = Object.values(value).join(';');
      } else {
        queryParams[key] = value;
      }
    });
    this.router.navigate([], {queryParams});
  }
}
