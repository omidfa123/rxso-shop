import Products from '../models/products.model';

export const productExists = async (productName: string) => {
  const product = await Products.findOne({ name: productName });
  if (product) return true;
  return false;
};

export const getAllProducts = async () => {
  const products = await Products.find();
  return products;
};
export const getProductByCategory = async (category: any) => {
  const products = await Products.find(category);
  return products;
};
