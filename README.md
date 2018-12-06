<h1>Stake Token Frontend</h1>
<p>Allows users to stake Ether (ETH) in exchange for Stake (STK) and after a period of time get more ETH than the user has invested</p>

<p>[Link to Stake Token (STK) Smart Contract source code] (https://github.com/PaddyMc/stake-token)</p>

<h2>To add a new contact instance or staker account<h2>
<ul>
  <li>
    Replace the RINKEBY variable or your preferred network variable in constants/constants.js
  </li>
  <li>
    Replace the STAKEADDRESS variable in constants/constants.js with the stake address defined in the Stake token (STK) smart contract
  </li>
  <li>
    Changes to the smartcontract network must be reflected in services/contract-utils/web3.js
  </li>
</ul>
<hr/>

<h2>To run</h2>
<ul>
  <li>
    npm install
  </li>
  <li>
    npm start
  </li>
</ul>
<hr/>
<h2>To test</h2>
<ul>
  <li>
    npm test
  </li>
</ul>
<hr/>

<h2>To build for production</h2>
<ul>
  <li>
    npm run build
  </li>
</ul>
<hr/>