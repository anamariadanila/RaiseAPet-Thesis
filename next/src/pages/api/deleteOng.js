import prisma from "../../lib/prisma";
import { NextApiResponse } from "next";

export default async function handler(req, res = NextApiResponse) {
  res.json({ message: "Hello Everyone!" });

  if (req.method === "DELETE") {
    const { ongCode } = req.body;

    if (!ongCode) return res.status(400).json({ error: "Missing ongCode" });

    const user = await prisma.users.delete({
      where: {
        ongCode: ongCode,
      },
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
