const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

const generateSignature = async (req, res) => {
  // Get the address from the request body
  const { address } = req.body;

  // Initialize the SDK with your private key
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");
};

module.exports = generateSignature;
