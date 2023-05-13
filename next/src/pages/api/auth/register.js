import connectMongo from "../../../database/connection";
import { hash } from "bcryptjs";
import Ongs from "../../../schema/ongSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have data." });
    const { ongCode, password, address, type } = req.body;

    const checkIfExists = await Ongs.findOne({ ongCode });
    if (checkIfExists)
      return res.status(409).json({ message: "Ong already exists." });

    const singleOng = await Ongs.findOne({ address });
    if (singleOng)
      return res.status(409).json({
        error: "Address already exists. Can't be 2 users with same address",
      });

    Ongs.create({
      ongCode,
      password: type === "ONG" ? await hash(password, 12) : null,
      address,
      type: type,
    })
      .then((ongs) => {
        return res.status(201).json({ status: true, ongs: ongs });
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({ err });
      });
    // } else {
    //   res
    //     .status(500)
    //     .json({ message: "HTTP method not valid only POST Accepted" });
    // }
  } else if (req.method === "GET") {
    console.log("FETCHING DOCUMENTS");
    // const fetchedOngs = await Ongs.find({});
    const lastEntry = await Ongs.find().limit(1).sort({ $natural: -1 });
    console.log("FETCHED DOCUMENTS");
    // res.json({ fetchedOngs });
    res.json({ lastEntry });
  } else {
    res.status(500).json({ message: `Unsupported HTTP method: ${req.method}` });
  }
}
