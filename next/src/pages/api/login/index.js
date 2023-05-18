import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const body = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      username: body.ongCode,
    },
  });

  if (user && (await bcrypt.compare(user.password, body.password))) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else {
    return new Response(JSON.stringify({ error: "Invalid Credentials" }));
  }
};
