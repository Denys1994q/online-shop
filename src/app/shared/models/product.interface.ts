export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  country: string;
  seller: string;
  state: string;
  price: number;
  discount?: number;
}
