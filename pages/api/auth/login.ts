import dbConnect from 'src/utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'src/server/models/user.model';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { email, password, name } = req.body;
  const { method } = req;
  if (method === 'POST') {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  }
};
