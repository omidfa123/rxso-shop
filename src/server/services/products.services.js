import Products from '../models/products.model';

export const productExists = async productName => {
  const product = await Products.findOne({ name: productName });
  if (product) return true;
  return false;
};
