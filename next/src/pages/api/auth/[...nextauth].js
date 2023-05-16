import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/connection";
import { compare } from "bcryptjs";
import Ong from "../../../schema/ongSchema";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed.";
        });
        const result = await Ong.findOne({
          ongCode: credentials.ongCode,
        });
        if (!result) {
          throw new Error("No ong found! Please register first!");
        }

        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        if (
          !checkPassword ||
          result.ongCode !== credentials.ongCode ||
          result.address.slice(-6) !== credentials.address
        ) {
          throw new Error(
            "Invalid credentials or address does not match! Please select correct metamask address!"
          );
        }

        return result;
      },
    }),
  ],
  // secret: process.env.JWT_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  // session: {
  //   jwt: true,
  // },
});
