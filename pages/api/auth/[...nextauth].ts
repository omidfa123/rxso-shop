import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import dbConnect from 'src/utils/dbConnect';
import { findUser } from 'src/server/services/user.services';
import { passwordCompare } from 'src/utils/tools';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuth from 'next-auth';

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    database: process.env.MONGO_URL,
    pages: {
      signIn: '/login',
    },
  });
