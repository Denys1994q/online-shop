import {Injectable} from '@angular/core';
import {CartProductInterface} from '../models/cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: CartProductInterface[] = [];
  totalPrice: number = 0;
  totalProductsNumber: number = 0

  constructor() {
    this.loadCartProducts();
  }

  addToCart(item: any): void {
    const existingProduct = this.products.find((p) => p._id === item._id);
    if (existingProduct) {
      existingProduct.amount++;
    } else {
      item.amount = 1;
      this.products.push(item);
    }
    this.saveCartProducts();
    this.calculateTotals();
  }

  getCartProducts(): any {
    const cartProducts = localStorage.getItem('cart');
    this.products = cartProducts ? JSON.parse(cartProducts) : []
  }

  saveCartProducts(): void {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  loadCartProducts(): void {
    const savedCartItems = localStorage.getItem('cart');
    if (savedCartItems) {
      this.products = JSON.parse(savedCartItems);
      this.calculateTotals();
    }
  }

  updateProductAmount(productId: string, newAmount: number): void {
    const productToUpdate = this.products.find((p) => p._id === productId);
    if (productToUpdate) {
      productToUpdate.amount = newAmount;
      this.saveCartProducts();
      this.calculateTotals();
    }
  }

  removeFromCart(productId: string): void {
    const index = this.products.findIndex((p) => p._id === productId);
    if (index !== -1) {
      this.products.splice(index, 1); 
      this.saveCartProducts(); 
      this.calculateTotals(); 
    }
  }

  calculateTotals(): void {
    this.totalPrice = this.products.reduce((total, product) => total + +product.price * +product.amount, 0);
    this.totalProductsNumber = this.products.reduce((total, product) => total + product.amount, 0);
  }
}
