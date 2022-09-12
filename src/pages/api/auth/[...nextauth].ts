import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import dbConnect from 'utils/dbConnect';
import { findUser } from 'server/services/user.services';
import { passwordCompare } from 'utils/tools';
import { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from 'utils/mongoClient';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user?._id) token._id = user._id;
  //     if (user?.role) token.role = user.role;
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token?._id) session._id = token._id;
  //     if (token?.role) session.role = token.role;
  //     return session;
  //   },
  // },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  NextAuth(req, res, authOptions);
}
