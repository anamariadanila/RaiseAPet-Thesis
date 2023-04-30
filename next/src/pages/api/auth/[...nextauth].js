import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      ongCode: {
        label: "Ong Code",
        type: "text",
      },
      password: {
        label: "Password",
        type: "password",
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/auth/loginauth", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
});
