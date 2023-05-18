import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });
    const { ongCode, password, address, type } = req.body;

    // if (type === "ONG") {
    const user = await prisma.users.findFirst({
      where: {
        ongCode: ongCode,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Ong not found" });
    }

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const { password, ...userWithoutPass } = user;
        return res.status(200).json(userWithoutPass);
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
    }
    // } else if (type === "Donator") {
    //   const user = await prisma.users.findFirst({
    //     where: {
    //       address: address,
    //     },
    //   });

    //   if (!user) {
    //     return res.status(404).json({ error: "Donator not found" });
    //   }

    //   if (user) {
    //     return res.status(200).json(user);
    //   } else {
    //     return res.status(401).json({ error: "Invalid donator" });
    //   }
    // }
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
