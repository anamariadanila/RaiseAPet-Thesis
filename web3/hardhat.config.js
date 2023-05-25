/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    // defaultNetwork: "goerli",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      goerli: {
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        // url: "https://rpc.ankr.com/eth_goerli",
        url: "sepolia.rpc.thirdweb.com",
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
