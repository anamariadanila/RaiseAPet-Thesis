import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import initializeFirebaseServer from "../../../lib/initFirebaseAdmin";

export default async function loginauth(req, res) {
  const loginPayload = req.body.payload;
  const domain = "crowdfundingong.com";
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.ADMIN_PRIVATE_KEY,
    "goerli"
  );

  let address;
  try {
    address = sdk.auth.verify(domain, loginPayload);
  } catch (e) {
    console.log("e", e);
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { auth } = initializeFirebaseServer(); // Initialize Firebase Admin

  const token = await auth.createCustomToken(address); // Create token for user

  return res.status(200).json({ token }); // Return token to client
}
