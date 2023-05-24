import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { compare } from "bcrypt";
import { signJwtAccessToken, verifyJwtAccessToken } from "../../../lib/jwt";

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
          let user = await prisma.users.findFirst({
            where: {
              ongCode: credentials?.ongCode,
            },
          });
          if (!user) {
            throw new Error("No user found. Register first!");
          }

          const match = await compare(credentials.password, user.password);
          if (!match || user.ongCode !== credentials.ongCode) {
            throw new Error("Invalid credentials");
          }

          if (user.address !== userAddress) {
            throw new Error("Invalid address");
          }
          const accessToken = signJwtAccessToken(user);

          user = { ...user, accessToken };

          const verifyToken = verifyJwtAccessToken(accessToken);
          console.log(verifyToken);
          if (!verifyToken) {
            throw new Error("Invalid token, login again");
          }

          return user;
        }

        if (req.body.type === "Donator") {
          let user = await prisma.users.findFirst({
            where: {
              address: credentials?.address,
            },
          });

          if (!user) {
            throw new Error("No user found! Register first!");
          }
          const accessToken = signJwtAccessToken(user);
          user = { ...user, accessToken };
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
  // secret: process.env.SECRET_KEY,
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
    // signOut: "/",
  },
});

export default handler;
