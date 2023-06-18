import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });
    const { address } = req.body;
    // res.json({ address });

    const user = await prisma.users.findFirst({
      where: {
        address: address,
      },
    });

    if (!user) {
      return res.status(409).json({ error: "ONG not found" });
    }

    if (user.deleted === true) {
      return res.status(409).json({ error: "ONG already deleted" });
    }

    if (user) {
      return res.status(200).json(user);
    }
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
