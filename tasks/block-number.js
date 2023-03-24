const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // Similar to:
    // const blockTask = async functio() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)

module.exports = {}
