import {ProductInterface} from '../../../shared/models/product.interface';

export interface CartProductInterface extends ProductInterface {
  amount: number;
}
