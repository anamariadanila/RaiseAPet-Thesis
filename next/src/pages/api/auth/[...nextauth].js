import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import * as bcrypt from "bcrypt";
import { compare } from "bcrypt";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        if (!req.body)
          return res.status(404).json({ error: "Don't have data" });

        if (req.body.type === "ONG") {
          const result = await prisma.users.findFirst({
            where: {
              ongCode: credentials?.ongCode,
            },
          });
          if (!result) {
            throw new Error("No user Found");
          }

          if (result.address !== req.body.address) {
            throw new Error("Invalid Address" + req.body.type);
          }

          const match = await compare(credentials.password, result.password);
          if (!match || result.ongCode !== credentials.ongCode) {
            throw new Error("Invalid credentials");
          }
          return result;
        } else if (req.body.type === "Donator") {
          const result = await prisma.users.findFirst({
            where: {
              address: credentials?.address,
            },
          });

          if (!result || result.type !== "Donator") {
            throw new Error("No user Found! Register First...!");
          }
          return result;
        }
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
  // session: {
  //   strategy: "jwt",
  //   jwt: true,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user = token;
  //     return session;
  //   },
  // },
});

export default handler;
