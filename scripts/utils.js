const { SolQL } = require('solql');
const { ethers } = require('ethers');



async function testSolQL(providerUrl, queryContractName, chainId, hre) {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const solql = new SolQL(queryContractName, chainId, provider, hre);
    const result = await solql.query.run();
  
    return result;
}




async function hardhatForking() {

    const Query = await hre.ethers.getContractFactory('Query');
    const query = await Query.deploy();

    const result = await query.callStatic.query();

    return result;

}




async function time(callback, msg) {
    const start = Date.now()
    const result = await callback();
    const finish = Date.now()
    const delta = finish - start;
    console.log(`${msg}: ${delta}ms`)

    return result;
}



module.exports = {
    testSolQL,
    hardhatForking,
    time
}