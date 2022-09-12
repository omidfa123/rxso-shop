import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from 'utils/mongoClient';
import GoogleProvider from 'next-auth/providers/google';
import nextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

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
  debug: true,
};

export default nextAuth(authOptions);
