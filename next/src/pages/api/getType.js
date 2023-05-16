import connectMongo from "../../database/connection";
import Ongs from "../../schema/ongSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));
  if (req.method === "GET") {
    // console.log("FETCHING DOCUMENTS");
    // // const fetchedOngs = await Ongs.find({});
    // const lastEntry = await Ongs.find().limit(1).sort({ $natural: -1 });
    // console.log("FETCHED DOCUMENTS");
    // // res.json({ fetchedOngs });
    // res.json({ lastEntry });

    //get the type from the ong

    console.log("FETCHING DOCUMENTS");

    const fetchedUsers = await Ongs.find({});

    console.log("FETCHED DOCUMENTS");

    res.json({ fetchedUsers });
  } else {
    res.status(500).json({ message: `Unsupported HTTP method: ${req.method}` });
  }
}
