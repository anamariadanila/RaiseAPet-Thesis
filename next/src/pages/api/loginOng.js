import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });

    const { ongCode, password, address, type } = req.body;

    const user = await prisma.users.findMany({
      where: {
        ongCode: ongCode,
        // address: address,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Ong not found" });
    }

    // const checkAddress = await prisma.users.findFirst({
    //   where: {
    //     address: address,
    //   },
    // });

    // if (checkAddress) {
    //   return res.status(409).json({ error: "Address already exists" });
    // }

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const { password, ...userWithoutPass } = user;
        return res.status(200).json(userWithoutPass);
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
    }
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
