export interface ProductInterface {
  _id: string;
  title: string;
  description: string;
  images: string[];
  country: string;
  seller: string;
  state: string;
  price: number;
  discount?: number;
  rating: number;
  brand: string;
}
