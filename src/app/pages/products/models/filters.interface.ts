import {CategoriesEnum} from '../../../shared/models/products-filters.model';
import {BrandsEnum} from '../../../shared/models/products-filters.model';

interface PriceFilterInterface {
  min: number;
  max: number;
}

export interface FiltersInterface {
  categories?: CategoriesEnum[];
  brands?: BrandsEnum[];
  rating?: number[];
  price: PriceFilterInterface;
}
