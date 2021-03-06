<h1>Stake Token Frontend</h1>
<p>Allows users to stake Ether (ETH) in exchange for Stake (STK) and after a period of time the user gets more ETH than initially invested</p>

[Link to Stake Token (STK) Smart Contract source code] (https://github.com/PaddyMc/stake-token)

<p>Built using React & Redux</p>
<p>node version = v10.14.1</p>
<p>npm version  = 6.4.1</p>

<h2>To add a new contact instance or staker account</h2>
<ul>
  <li>
    Replace the RINKEBY variable or your preferred network variable in constants/constants.js
  </li>
  <li>
    Replace the STAKEADDRESS variable in constants/constants.js with the stake address defined in the Stake token (STK) smart contract
  </li>
  <li>
    Changes to the Smart Contracts network must be reflected in services/contract-utils/staketoken.js
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