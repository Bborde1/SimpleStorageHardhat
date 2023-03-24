require("@nomicfoundation/hardhat-toolbox")
require("dotenv")
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/ozO0Z4WJmXIgmo0DcC973LE_N0d1hbG0"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "c2389b04c31dca70183eac674a5bf32f2032fbb6ec93cd078a5e04e7f0e895de"

const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "4Q369XYCB97JKWTTQJWU146JGE5RUY94B6"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts: Hardhat adds these so we dont have to,
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}
