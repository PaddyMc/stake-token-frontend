import React from 'react';
import CustomPopUp from '../PopUp/PopUp'
import StakeForm from '../StakeForm/StakeForm'
import TransferForm from '../TransferForm/TransferForm'
import DetailsOfUse from '../DetailsOfUse/DetailsOfUse'

import './ContractActions.css';

const ContractActions = props => {
  const {
    stake,
    transferTokens,
    redeemStake
  } = props

  return (
    <div>
      <h3 className="app-text info-header"><u>Contract Actions</u></h3>
      <div className="app-button-container-full-length">
        <div className="app-button-container">
          <CustomPopUp 
            buttonText={"Details Of Use"}
            action={"null"}
            Content={DetailsOfUse}
          />

          <CustomPopUp 
            buttonText={"Stake Ether"}
            action={stake}
            Content={StakeForm}
          />

          <CustomPopUp 
            buttonText={"Transfer Tokens"}
            action={transferTokens}
            Content={TransferForm}
          />
        </div>
        <div className="app-button-container-full-length">
          <button
            className="app-button"
            onClick={()=> redeemStake()}
          >
            Redeem Tokens
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContractActions;