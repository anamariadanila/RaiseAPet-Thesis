import { ThirdwebStorage } from "@thirdweb-dev/storage";
import fs from "fs";

export default function handler(req, res) {
  const storage = new ThirdwebStorage();
  const photo =
    "/Users/anadanila/Documents/GitHub/Licenta-2023-v2/next/src/assets/cat.jpeg";
  (async () => {
    const upload = await storage.upload(fs.readFileSync(photo));

    console.log(storage.resolveScheme(upload));
  })();

  console.log("aici");

  res.status(200).json({ name: "John Doe" });
}
