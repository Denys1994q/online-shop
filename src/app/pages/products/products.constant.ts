import {ProductInterface} from '../../shared/models/product.interface';

export const products: ProductInterface[] = [
  {
    id: '1',
    title: 'Iphone 13',
    description:
      'Screen (6.5", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 GHz + 6 x 2.0 GHz) / main triple camera: 50 MP + 5 MP + 2 MP, front camera: 13 MP / RAM 6 GB / 128 GB of built-in memory + microSD (up to 1 TB) / 3G / LTE / GPS / GLONASS / BDS / support for 2 SIM cards (Nano-SIM) / Android 13 / 5000 mAh',
    image: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1716276018/284913536_g02dfv.webp',
    country: 'USA',
    seller: 'Rozetka',
    state: 'New',
    price: 1200,
    discount: 10,
    brand: 'Apple',
    rating: 5
  },
  {
    id: '2',
    title: 'Samsung Galaxy A24',
    description:
      'Screen (6.5", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 GHz + 6 x 2.0 GHz) / main triple camera: 50 MP + 5 MP + 2 MP, front camera: 13 MP / RAM 6 GB / 128 GB of built-in memory + microSD (up to 1 TB) / 3G / LTE / GPS / GLONASS / BDS / support for 2 SIM cards (Nano-SIM) / Android 13 / 5000 mAh',
    image: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697390868/samsung_galaxy_a24_front_lzj7rg.webp',
    country: 'USA',
    seller: 'Rozetka',
    state: 'New',
    price: 55,
    rating: 4,
    brand: 'Samsung'
  },
  {
    id: '3',
    title: 'Motorola G32',
    description:
      'Screen (6.5", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 GHz + 6 x 2.0 GHz) / main triple camera: 50 MP + 5 MP + 2 MP, front camera: 13 MP / RAM 6 GB / 128 GB of built-in memory + microSD (up to 1 TB) / 3G / LTE / GPS / GLONASS / BDS / support for 2 SIM cards (Nano-SIM) / Android 13 / 5000 mAh',
    image: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1697355342/motorolla_front_yamsvb.webp',
    country: 'USA',
    seller: 'Rozetka',
    state: 'New',
    price: 200,
    rating: 1,
    discount: 20,
    brand: 'Motorola'
  }
];
