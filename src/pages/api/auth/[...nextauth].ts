import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from 'utils/dbConnect';
import { findUser } from 'server/services/user.services';
import { passwordCompare } from 'utils/tools';
import { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'email', placeholder: '' },
      },
      // @ts-ignore
      async authorize(credentials) {
        await dbConnect();
        const user = await findUser(credentials?.email);
        if (!user) {
          throw new Error('User not found');
        }
        if (!(await passwordCompare(credentials?.password!, user.password))) {
          throw new Error('Password incorrect');
        }

        return {
          _id: user._id,
          email: user.email,
          role: user.role,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session._id = token._id;
      if (token?.role) session.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  NextAuth(req, res, authOptions);
}
