import React from 'react';

import './StakerInfo.css';

const StakerInfo = props => {
  const {
    numberOfTokens,
    time,
    returnTokens,
    redeemed,
    precentGained,
  } = props

  return (
    <div>
      <h3 className="app-text info-header"><u>Staker Details</u></h3>
      {
        time ?
          (
            <div>
              <div className="app-text staker-info-text">
                <div className="staker-info-width">Token Balance:</div>
                <div className="staker-info-text-adjustment">
                  <div>{numberOfTokens}</div>
                </div>
              </div>
              <div className="app-text staker-info-text">
                <div className="staker-info-width">Date Of Stake:</div>
                <div className="staker-info-text-adjustment">
                  <div>{new Date(time).toString().slice(0, 24)}</div>
                </div>
              </div>
              <div className="app-text staker-info-text">
                <div className="staker-info-width">Awaiting Payout:</div>
                <div className="staker-info-text-adjustment">
                  <div>{String(returnTokens)}</div>
                </div>
              </div>
              <div className="app-text staker-info-text">
                <div className="staker-info-width">Paid Out:</div>
                <div className="staker-info-text-adjustment">
                  <div>{String(redeemed)}</div>
                </div>
              </div>
              <div className="app-text staker-info-text">
                <div className="staker-info-width">Percent Gained:</div>
                <div className="staker-info-text-adjustment">
                  <div>{precentGained}%</div>
                </div>
              </div>
              
            </div>
          ) : (
            <div>
              <div className="app-text">User has not staked</div>
              <div className="app-text">Please click on the STAKE ETHER button below to stake and recieve STK tokens</div>
            </div>
          )
      }
      <hr />
    </div>
  );
}
export default StakerInfo;