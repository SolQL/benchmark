const { testSolQL, hardhatForking, time } = require('./utils')
const hre = require('hardhat');


async function main() {
    const hardhatFork = await time(hardhatForking, 'hardhat forking time');
    //console.log(hardhatFork);

    const firstResult = await time(() => testSolQL(process.env.GOERLI_URL, "Query", "5", hre), 'solql time');
    //console.log(firstResult);
}



main()
.catch(error => console.error(error))