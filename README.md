
# Installation

First, clone this repositry:

```
git clone https://github.com/SolQL/solql-benchmark.git
```


Then, move into the repo and install the dependencies: 

```
cd solql-benchmark
npm i
```


Finally,

Add a ```.env``` variable named ```GOERLI_URL``` and set it to a goerli testnet provider url. (needed for the hardhat.config.js file to function)



# Usage

The main scripts used for benchmarking are ```fork.js```, ```solql.js```, and ```forkVsSolql.js``` which are all located in the ```scripts``` directory.

Note that by ```fork``` we mean hardhat forking and by ```solql``` we mean SolQL. (mind = blown)


Due to the inner workings of the ```HardhatRuntimeEnvironment```, the most reliable way of comparing SolQL to hardhat forking is to run the ```fork.js``` and ```solql.js``` scripts seperately. 

```forkVsSolql.js``` will produce varying resulsts based on which method is used first in the main function. (odd)

## Running the solql script
```
npx hardhat run scripts/solql.js
```
## Running the fork script
```
npx hardhat run scripts/fork.js
```

These commands should log the time taken, and the resulting array of token addresses to your console. Will look something like:
```
solql time: 9854ms
0x000000000000000000000000bb76889a512bd0e017226e3976a6ceb37647b8870000000000000000000000004ef078a67c422aab8969a286711ecee68b9c078c0000000000000000000000006bf1f640e0766448834c10acb6f0785477ead5e200000000000000000000000021f52f5dccb5b09c3ffd1e8b1bb38c6010d34c04000000000000000000000000388ed7777016b0e3344ea671cc3aa2785acb689500000000000000000000000025839b633de31b952dde70792b9f5002f69fbf7e000000000000000000000000c1c0472c0c80bccdc7f5d01a376bd97a734b8815000000000000000000000000598aaf0cb0d5213f84aa475e9bae31478b9a114a000000000000000000000000651500c4c0f34c5fccde6f6f289e9a2984553844000000000000000000000000c778417e063141139fce010982780140aa0cd5ab
```

Also note that on the first try, Hardhat does some caching so it's best to have a warm up run of both scripts and then proceed to record and measure results. 
