import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken, verifyJwtAccessToken } from "../../lib/jwt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });
    const { ongCode, password, address, type } = req.body;

    const checkOngCode = await prisma.users.findFirst({
      where: {
        ongCode: ongCode,
      },
    });

    if (!checkOngCode) {
      return res.status(409).json({ error: "Ong code not found" });
    }

    const checkAddress = await prisma.users.findFirst({
      where: {
        address: address,
      },
    });

    if (!checkAddress) {
      return res.status(409).json({
        error: "Address not found.",
      });
    }

    let user = await prisma.users.update({
      where: {
        ongCode: ongCode,
      },

      data: {
        password: await bcrypt.hash(password, 10),
        address: address,
        type: type,
      },
    });

    const accessToken = signJwtAccessToken(user);

    user = { ...user, accessToken };

    const verifyToken = verifyJwtAccessToken(accessToken);
    if (!verifyToken) {
      throw new Error("Invalid token, login again");
    }
    if (user) {
      const { password, ...userWithoutPass } = user;
      return res.status(200).json(userWithoutPass);
    }
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
