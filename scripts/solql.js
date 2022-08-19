const { time, testSolQL } = require('./utils')
const { ethers } = require('ethers');
const hre = require('hardhat');



async function main() {
    const result = await time(() => testSolQL(process.env.GOERLI_URL, "Query", "5", hre), 'solql time');
    console.log(result);
}

main()
.catch(error => console.error(error));