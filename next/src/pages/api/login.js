// import { signJwtAccessToken } from "../../../lib/jwt";
import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";

const login = async (req, credentials) => {
  if (req.method === "POST") {
    // const body = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        ongCode: credentials.ongCode,
      },
    });
    if (user && (await bcrypt.compare(credentials.password, user.password))) {
      //user.password vine de la baza de date, iar body.password vine din client
      const { password, ...userWithoutPass } = user;
      // const accessToken = signJwtAccessToken(userWithoutPass);
      // const result = {
      //   ...userWithoutPass,
      //   accessToken,
      // };
      return new Response(JSON.stringify(userWithoutPass));
    } else {
      return new Response(JSON.stringify({ error: "Invalid credentials" }));
    }
  }
};

export default login;
