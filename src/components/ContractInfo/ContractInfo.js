import React from 'react';

import './ContractInfo.css';

const ContractInfo = props => {
  const {
    stakeAddress,
    contractAddress,
  } = props

  return (
    <div>
      <h3 className="app-text info-header"><u>Contract Details</u></h3>
      <div className="contract-info">
        <div className="app-text contract-info-border">
          <div>Staking Address:</div>
          <div><b>{stakeAddress}</b></div>
        </div>
        <div className="app-text">
          <div>Token Address:</div>
          <div><b>{contractAddress}</b></div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default ContractInfo;