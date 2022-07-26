import dbConnect from 'utils/dbConnect';
import Products from 'server/models/products.model';
import { productExists } from 'server/services/products.services';
import { NextApiResponse, NextApiRequest } from 'next';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const body = req.body;
  switch (method) {
    case 'GET':
      try {
        const products = await Products.find({});
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      return;
    case 'POST':
      try {
        if (await productExists(body.name)) {
          res
            .status(400)
            .json({ success: false, error: 'Product already exists' });
        }
        const product = new Products(body);
        await product.save();
        res.status(201).json({ success: true, data: product });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'somthing goes wrong' });
      }
      return;
    default:
      res.status(400).json({ success: false });
      return;
  }
}
