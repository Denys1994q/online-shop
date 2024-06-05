import {CategoriesEnum, BrandsEnum} from '../../../shared/models/products-filters.model';

const enumLabelResolver = {
  categories: {
    [CategoriesEnum.Smartphones_TV_Electronics]: 'Smartphones, TV, Electronics',
    [CategoriesEnum.Computers_Laptops]: 'Computers, laptops',
    [CategoriesEnum.Household_Appliances]: 'Household appliances',
    [CategoriesEnum.Sport]: 'Sport',
    [CategoriesEnum.Game_Zone]: 'Game Zone'
  },
  brands: {
    [BrandsEnum.Sony]: 'Sony',
    [BrandsEnum.Philips]: 'Philips',
    [BrandsEnum.Toshiba]: 'Toshiba',
    [BrandsEnum.LG]: 'LG',
    [BrandsEnum.Apple]: 'Apple',
    [BrandsEnum.Samsung]: 'Samsung',
    [BrandsEnum.ZTE]: 'ZTE',
    [BrandsEnum.Motorola]: 'Motorola',
    [BrandsEnum.Techno]: 'Techno',
    [BrandsEnum.Nokia]: 'Nokia',
    [BrandsEnum.Xiaomi]: 'Xiaomi',
    [BrandsEnum.Poco]: 'Poco',
    [BrandsEnum.Beko]: 'Beko',
    [BrandsEnum.Gorenje]: 'Gorenje',
    [BrandsEnum.Indesit]: 'Indesit',
    [BrandsEnum.Corrado]: 'Corrado',
    [BrandsEnum.Brain]: 'Brain',
    [BrandsEnum.Formula]: 'Formula'
  }
};

export const categoriesOptions = Object.entries(enumLabelResolver.categories).map(([value, label]) => ({
  label,
  value
}));

export const brandsOptions = Object.entries(enumLabelResolver.brands).map(([value, label]) => ({
  label,
  value
}));
