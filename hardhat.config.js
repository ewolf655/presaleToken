require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require ("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
const { PRIVATE_KEY, INFURA_API_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: 'https://ethereum-holesky-rpc.publicnode.com',
      chainId: 17000,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "holesky",
        chainId: 17000,
        urls: {
          apiURL: "https://api-holesky.etherscan.io/api",
          browserURL: "https://holesky.etherscan.io",
        },
      },
    ],
  },
};
