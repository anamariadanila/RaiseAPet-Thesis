import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { compare } from "bcrypt";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const userAddress = await req.body.address;
        if (!req.body)
          return res.status(404).json({ error: "Don't have data" });

        if (req.body.type === "ONG") {
          const user = await prisma.users.findFirst({
            where: {
              ongCode: credentials?.ongCode,
            },
          });
          if (!user) {
            throw new Error("No user Found");
          }

          const match = await compare(credentials.password, user.password);
          if (!match || user.ongCode !== credentials.ongCode) {
            throw new Error("Invalid credentials");
          }

          if (user.address !== userAddress) {
            throw new Error("Invalid Address" + req.body.address);
          }
          return user;
        }
        if (req.body.type === "Donator") {
          const user = await prisma.users.findFirst({
            where: {
              address: credentials?.address,
            },
          });

          if (!user || user.type !== "Donator") {
            throw new Error(
              "No user Found! Register First...!" + req.body.address
            );
          }
          return user;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.SECRET_KEY,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});

export default handler;
