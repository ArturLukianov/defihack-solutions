require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "bEy39NkIp6Z6MxcfdNOErkf3QgW4L7CL";

const ROPSTEN_PRIVATE_KEY = "0x9ef8a29fd0c7b3daf2701cb713e06a05b901f15cf9f7dbe616eeeef0ebd44cd6";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.0"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.12"
      }]
  },
  defaultNetwork: "ropsten",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  }
};
