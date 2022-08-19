const { hardhatForking, time } = require('./utils')
const hre = require('hardhat');



async function main() {
    const result = await time(hardhatForking, 'hardhat forking time');

    console.log(result);
}



main()
.catch(error => console.error(error));