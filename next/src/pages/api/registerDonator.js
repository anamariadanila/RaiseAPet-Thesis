import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data" });
    const { address, type } = await req.body;

    const checkAddress = await prisma.users.findFirst({
      where: {
        address: address,
      },
    });

    if (checkAddress) {
      return res.status(409).json({
        error:
          "Address already exists. Choose another address from MetaMask wallet.",
      });
    }
    const user = await prisma.users.create({
      data: {
        address: address,
        type: type,
        ongCode: null,
        password: null,
      },
    });
    if (user) {
      return res.status(200).json(user);
    }
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
