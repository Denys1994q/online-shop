import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent {
  product = {
    title: 'Iphone 13',
    description:
      'Screen (6.5", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 GHz + 6 x 2.0 GHz) / main triple camera: 50 MP + 5 MP + 2 MP, front camera: 13 MP / RAM 6 GB / 128 GB of built-in memory + microSD (up to 1 TB) / 3G / LTE / GPS / GLONASS / BDS / support for 2 SIM cards (Nano-SIM) / Android 13 / 5000 mAh',
    image:
      'https://media.wired.com/photos/61439ca1ea5305148f36968a/4:3/w_1610,h_1207,c_limit/Gear-iphone13_sierra_blue__2bovafkl4yaa_large_2x.jpg',
    country: 'USA',
    seller: 'Rozetka',
    state: 'New',
    price: 102,
    discount: 10
  };
}
