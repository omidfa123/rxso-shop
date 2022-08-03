import dbConnect from '../../../src/utils/dbConnect';
import Products from '../../../src/server/models/products.model';
import { NextApiResponse, NextApiRequest } from 'next';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
  }
};
