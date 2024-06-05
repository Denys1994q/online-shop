import {categoriesOptions, brandsOptions} from './products-filters.helper';
import {
  DynamicFormInterface,
  FormFieldTypeEnum
} from '../../../shared/components/forms/dynamic-form/dynamic-form.model';

export const MIN_PRODUCTS_PRICE = 1;
export const MAX_PRODUCTS_PRICE = 1000;

export const productsFilters: DynamicFormInterface = {
  mode: 'onChange',
  resetButton: true,
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
      iconLabel: 'star',
      options: [
        {label: '5', value: 5},
        {label: '4', value: 4},
        {label: '3', value: 3},
        {label: '2', value: 2},
        {label: '1', value: 1}
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
