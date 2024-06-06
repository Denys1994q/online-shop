export const baseUrl = 'https://shop-server-1-rdvq.onrender.com';
export const getAllProductsUrl = 'product';
export const getOneProductUrl = (id: string) => `${baseUrl}/${getAllProductsUrl}/${id}`;
