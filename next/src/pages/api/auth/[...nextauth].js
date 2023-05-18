import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        //aici se verifica in baza de date daca exista user ul sau nu
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ongCode: credentials?.ongCode,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        //aici trebuie facut un POST request catre server cu datele de login, adica la api de login

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user; //pe care il avem din login api
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null; // in session va fi null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
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

export default handler; //we can have it in app
