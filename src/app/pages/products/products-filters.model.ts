export enum CategoriesEnum {
  SMARTPHONES_TV_ELECTRONICS = 1,
  COMPUTERS_LAPTOPS = 2,
  HOUSEHOLD_APPLIANCES = 3,
  SPORT = 4,
  GAME_ZONE = 5
}

export enum BrandsEnum {
  SONY = 1,
  PHILIPS = 2,
  TOSHIBA = 3,
  LG = 4,
  APPLE = 5,
  SAMSUNG = 6,
  ZTE = 7,
  MOTOROLA = 8,
  TECHNO = 9,
  NOKIA = 10,
  XIAOMI = 11,
  POCO = 12,
  BEKO = 13,
  GORENJE = 14,
  INDESIT = 15,
  CORRADO = 16,
  BRAIN = 17,
  FORMULA = 18,
  ACER = 19,
  HP = 20
}

export enum StateEnum {
  NEW = 1,
  PRE_OWNED = 2
}

export enum SellerEnum {
  ROZETKA = 1,
  ALLO = 2,
  FOXTROT = 3,
  MOYO = 4,
  PROM = 5
}

const enumLabelResolver = {
  categories: {
    [CategoriesEnum.COMPUTERS_LAPTOPS]: 'Computers, laptops',
    [CategoriesEnum.GAME_ZONE]: 'Game Zone',
    [CategoriesEnum.HOUSEHOLD_APPLIANCES]: 'Household appliances',
    [CategoriesEnum.SPORT]: 'Sport',
    [CategoriesEnum.SMARTPHONES_TV_ELECTRONICS]: 'Smartphones, TV, Electronics'
  },
  brands: {
    [BrandsEnum.APPLE]: 'Apple',
    [BrandsEnum.SONY]: 'Sony',
    [BrandsEnum.PHILIPS]: 'Philips',
    [BrandsEnum.TOSHIBA]: 'Toshiba',
    [BrandsEnum.LG]: 'LG',
    [BrandsEnum.SAMSUNG]: 'Samsung',
    [BrandsEnum.ZTE]: 'ZTE',
    [BrandsEnum.MOTOROLA]: 'Motorola',
    [BrandsEnum.TECHNO]: 'Techno',
    [BrandsEnum.NOKIA]: 'Nokia',
    [BrandsEnum.XIAOMI]: 'Xiaomi',
    [BrandsEnum.POCO]: 'Poco',
    [BrandsEnum.BEKO]: 'Beko',
    [BrandsEnum.GORENJE]: 'Gorenje',
    [BrandsEnum.INDESIT]: 'Indesit',
    [BrandsEnum.CORRADO]: 'Corrado',
    [BrandsEnum.BRAIN]: 'Brain',
    [BrandsEnum.FORMULA]: 'Formula'
  }
};

export const categoriesOptions = Object.entries(enumLabelResolver.categories).map(([value, label]) => ({
  label,
  value: +value
}));

export const brandsOptions = Object.entries(enumLabelResolver.brands).map(([value, label]) => ({
  label,
  value: +value
}));
