import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken, verifyJwtAccessToken } from "../../lib/jwt";

export default async function handler(req, res) {
  //create the delete login for the ong

  if (req.method === "DELETE") {
    const { ongCode } = req.body;

    if (!ongCode) return res.status(400).json({ error: "Missing ongCode" });

    const user = await prisma.users.delete({
      where: {
        ongCode: ongCode,
      },
    });
    res.status(200).json(user);
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
