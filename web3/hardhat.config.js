/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "goerli",
    networks: {
      hardhat: {},
      goerli: {
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        url: "https://rpc.ankr.com/eth_goerli",
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
