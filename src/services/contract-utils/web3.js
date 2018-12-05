import Web3 from 'web3';

let web3 = null

if (window.ethereum) {
  try {
    window.ethereum.enable();
    web3 = new Web3(window.ethereum);
  } catch (error) {
    
  }
}
else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}
else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  console.log('Non-Ethereum browser detected');
}

switch (web3.currentProvider.networkVersion) {
  case "1":
    alert("Please use Rinkeby Test Network")
    break
  case "3":
    alert("Please use Rinkeby Test Network")
    break
  case "4":
    //console.log('This is the Rinkeby test network.')
    break
  case "42":
    alert("Please use Rinkeby Test Network")
    break
  default:
    break
}


export default web3