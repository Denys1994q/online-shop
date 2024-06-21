import {Injectable} from '@angular/core';
import {BehaviorSubject, map, startWith} from 'rxjs';
import {CartProductInterface} from '../models/cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsSubject: BehaviorSubject<CartProductInterface[]> = new BehaviorSubject<CartProductInterface[]>([]);
  products$ = this.productsSubject.asObservable();

  totalPrice$ = this.products$.pipe(
    map((products) => {
      return products.reduce((total, product) => total + +product.price * +product.amount, 0);
    }, startWith(0))
  );

  totalProductsNumber$ = this.products$.pipe(
    map((products) => {
      return products.reduce((total, product) => total + product.amount, 0);
    })
  );

  constructor() {
    this.loadCartProducts();
  }

  addToCart(product: any): void {
    const currentProducts = this.productsSubject.getValue();
    const existingProduct = currentProducts.find((p) => p._id === product._id);
    if (existingProduct) {
      existingProduct.amount++;
    } else {
      product.amount = 1;
      currentProducts.push(product);
    }
    this.productsSubject.next([...currentProducts]);
    this.updateCart(currentProducts);
  }

  removeFromCart(productId: string): void {
    const currentProducts = this.productsSubject.getValue();
    const index = currentProducts.findIndex((p) => p._id === productId);
    if (index !== -1) {
      currentProducts.splice(index, 1);
      this.productsSubject.next([...currentProducts]);
      this.updateCart(currentProducts);
    }
  }

  updateProductAmount(productId: string, newAmount: number): void {
    const currentProducts = this.productsSubject.getValue();
    const productToUpdate = currentProducts.find((p) => p._id === productId);
    if (productToUpdate) {
      productToUpdate.amount = newAmount;
      this.productsSubject.next([...currentProducts]);
      this.updateCart(currentProducts);
    }
  }

  updateCart(products: CartProductInterface[]): void {
    this.saveCartProducts(products);
  }

  getCartProducts(): CartProductInterface[] {
    const cartProducts = localStorage.getItem('cart');
    return cartProducts ? JSON.parse(cartProducts) : [];
  }

  saveCartProducts(products: CartProductInterface[]): void {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  loadCartProducts(): void {
    const savedCartItems = this.getCartProducts();
    this.productsSubject.next(savedCartItems);
  }
}
