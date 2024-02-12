import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });
    const { ongCode, address } = req.body;
    res.json({ ongCode, address });

    const checkOngCode = await prisma.users.findFirst({
      where: {
        ongCode: ongCode,
      },
    });

    if (!checkOngCode) {
      return res.status(409).json({ error: "ONG code not found" });
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
        deleted: true,
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
