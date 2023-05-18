import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      ongCode: body.ongCode,
      password: await bcrypt.hash(body.password, 10),
      address: body.address,
      type: body.type,
    },
  });

  const { password, ...userWithoutPass } = user;

  return new Response(JSON.stringify(userWithoutPass));
};
