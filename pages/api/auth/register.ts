import dbConnect from 'src/utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'src/server/models/user.model';
import { userExists } from 'src/server/services/user.services';
import { passwordHash } from 'src/utils/tools';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { email, password, name } = req.body;
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        if (await userExists(email)) {
          res.status(400).json({ message: 'User already exists' });
          return;
        }
        const hashedPassword = await passwordHash(password);
        const user = new User({ email, password: hashedPassword, name });
        await user.save();
        res.status(201).json({
          message: 'User created',
          user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
          },
        });
      } catch (error: any) {
        res.status(500).json({ message: error.errors });
      }
      return;
    case 'GET':
      const users = await User.find();
      res.status(200).json({ users });
      return;
  }
};
