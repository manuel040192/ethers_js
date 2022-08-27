const { ethers } = require('ethers');

const INFURA_ID = 'abc';

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

async function main() {
    const balance = await provider.getBalance(address);
    console.log(`ETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`);
}

main()
