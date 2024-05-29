import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {Subject, takeUntil} from 'rxjs';
import {DynamicFormFieldModel} from '../../shared/components/forms/filters/dynamic-form-field/dynamic-form-field.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService, private _formBuilder: FormBuilder) {}
  products!: ProductInterface[];
  loading: boolean = true;
  unsubscribe$ = new Subject<void>();

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false
  });

  dynamicFormFields: DynamicFormFieldModel[] = [
    {
      id: 'favoriteMovies',
      label: 'Favorite Movies',
      type: 'select',
      selectMenuOptions: [
        {
          label: 'Star Wars',
          value: 'e7a9c049-1a85-4c5a-b755-1b0a5c4394a3'
        },
        {
          label: 'Lord of The Rings',
          value: 'd624c916-d6f7-487f-8b16-87a034de3e34'
        },
        {
          label: 'Shutter Island',
          value: 'cf7cb566-6d2b-4b6b-96a3-ae9fba2a47af'
        },
        {
          label: 'The Godfather',
          value: 'b19b3edc-32da-4684-a10f-6e019df00d9e'
        }
      ],
      validators: [Validators.required]
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      validators: [Validators.required, Validators.email]
    },
    {
      id: 'surname',
      label: 'Surname',
      type: 'text',
      validators: [Validators.required]
    },
    {
      id: 'brands',
      label: 'Brands',
      type: 'checkbox',
      checkboxOptions: [
        {label: 'Apple', value: 'Apple'},
        {label: 'LG', value: 'LG'},
        {label: 'Samsung', value: 'Samsung'}
      ],
      validators: []
    }
  ];

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (products: ProductInterface[]) => {
          this.products = products;
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
