import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";
import { hash } from "bcrypt";

//pt a crea un user nou: name, email, password <=> ongcode, parola, confirmare parola
// const user = async (req, res) => {
//   if (req.method === "POST") {
//     const { ongCode, password, address, type } = req.body;

//     // const body = await req.json();
//     const user = await prisma.user.create({
//       data: {
//         ongCode: ongCode,
//         password: await hash(password, 10), //salvam parola criptata in bd
//         address: address,
//         type: type,
//       },
//     });

//     // const { password, ...rest } = user; //rest = user fara password
//     return new Response(JSON.stringify(user));
//   } else {
//     return res
//       .status(500)
//       .json({ message: "HTTP method not valid only POST Accepted" });
//   }
// };
// export default user;

//asa facem un nou user in bd

export default async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
