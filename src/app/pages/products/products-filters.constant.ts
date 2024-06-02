import {categoriesOptions, brandsOptions} from './products-filters.model';
import {
  DynamicFormInterface,
  FormFieldTypeEnum
} from '../../shared/components/forms/dynamic-form/dynamic-form.model';

export const MIN_PRODUCTS_PRICE = 1;
export const MAX_PRODUCTS_PRICE = 1000;

export const productsFilters: DynamicFormInterface = {
  mode: 'onChange',
  resetBtn: true,
  fields: [
    {
      id: 'categories',
      label: 'Categories',
      type: FormFieldTypeEnum.Checkbox,
      options: categoriesOptions
    },
    {
      id: 'brands',
      label: 'Brands',
      type: FormFieldTypeEnum.Checkbox,
      options: brandsOptions
    },
    {
      id: 'rating',
      label: 'Rating',
      type: FormFieldTypeEnum.Checkbox,
      options: [
        {label: '⭐⭐⭐⭐⭐', value: 5},
        {label: '⭐⭐⭐⭐', value: 4},
        {label: '⭐⭐⭐', value: 3},
        {label: '⭐⭐', value: 2},
        {label: '⭐', value: 1}
      ]
    },
    {
      id: 'price',
      label: 'Price',
      type: FormFieldTypeEnum.Slider,
      min: MIN_PRODUCTS_PRICE,
      max: MAX_PRODUCTS_PRICE,
      options: [
        {label: 'min', value: MIN_PRODUCTS_PRICE},
        {label: 'max', value: MAX_PRODUCTS_PRICE}
      ]
    }
  ]
};
