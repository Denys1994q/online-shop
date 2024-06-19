import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {productsFilters} from './constants/products-filters.constant';
import {ActivatedRoute} from '@angular/router';
import {FiltersInterface} from './models/filters.interface';
import {SearchParamsService} from './services/search-params.service';
import {FieldInterface} from '../../shared/components/forms/dynamic-form/dynamic-form.model';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: ProductInterface[];
  productsFilters = productsFilters;
  unsubscribe$ = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    private searchParamsService: SearchParamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.route.queryParams.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.productsFilters.fields.forEach((field: FieldInterface) => {
        if (params.hasOwnProperty(field.id)) {
          field.defaultValues = params[field.id].split(';');
        }
      });
    });
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((products: ProductInterface[]) => {
      this.products = products;
    });
  }

  onFormChange(values: FiltersInterface): void {
    this.searchParamsService.createSearchParams(values);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
