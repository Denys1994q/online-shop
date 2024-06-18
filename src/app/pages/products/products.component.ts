import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductInterface} from '../../shared/models/product.interface';
import {productsFilters} from './constants/products-filters.constant';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  products!: ProductInterface[];
  loading: boolean = false;
  productsFilters = productsFilters;

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
    this.route.queryParams.subscribe((params) => {
      const categoriesParam = params['categories'];
      const brandsParam = params['brands'];
      const ratingParam = params['rating'];
      const priceParam = params['price'];
      const categories = categoriesParam ? categoriesParam.split(';') : [];
      const brands = brandsParam ? brandsParam.split(';') : [];
      const rating = ratingParam ? ratingParam.split(';') : [];
      const priceParams = priceParam
        ? priceParam.split('&').reduce((acc: any, curr: any) => {
            const [key, value] = curr.split('=');
            acc[key] = value;
            return acc;
          }, {})
        : {};
      this.productsFilters.fields.forEach((field: any) => {
        if (field.id === 'categories') {
          field.defaultValues = categories;
        }
        if (field.id === 'rating') {
          field.defaultValues = rating.map((rating: string) => +rating)
        }
        if (field.id === 'brands') {
          field.defaultValues = brands;
        }
        if (field.id === 'price') {
          field.defaultValues = {
            min: +priceParams.min, 
            max: +priceParams.max
          };
        }
      });
      console.log(this.productsFilters.fields)
    });
  }

  getProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (products: ProductInterface[]) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      }
    });
  }

  onFormChange(values: any): void {
    // динамічно це робити
    const queryParams = {
      categories: values.categories && values.categories.join(';'),
      brands: values.brands && values.brands.join(';'),
      rating: values.rating && values.rating.join(';'),
      price: `min=${values.price.min}&max=${values.price.max}`
    };
    this.router.navigate([], {queryParams});
    console.log('Form values changed:', values);
  }
}
