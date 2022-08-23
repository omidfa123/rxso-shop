import dbConnect from 'utils/dbConnect';
import Products from 'server/models/products.model';
import { NextApiResponse, NextApiRequest } from 'next';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const query = req.query;
        const products = await Products.find(query);
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      return;
    case 'DELETE':
      try {
        const product = await Products.findByIdAndDelete(req.query.category);
        console.log('product', product);

        if (!product) {
          res
            .status(404)
            .json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, data: await Products.find({}) });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      return;
  }
}
