import React from 'react';

import './DetailsOfUse.css';

const DetailsOfUse = props => {
  return (
    <div className="app-text details-of-use-text">
      <p>1. A user can only stake once per account</p>
      <p>2. 1 STK == 1 ETH</p>
      <p>3. A user cannot redeem any tokens unless they have staked ETH</p>
      <p>4. Gains increase over time</p>
      <p>5. After redeeming tokens a user must wait for the backend system pay out</p>
      <p>6. When the 'REDEEM TOKENS' button is clicked all user tokens are burned</p>
      <p>7. Diminshing returns on heavily traded token accounts</p>
    </div>
  );
}
export default DetailsOfUse;