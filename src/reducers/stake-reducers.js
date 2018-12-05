import extend from 'xtend'
import { STAKEADDRESS, RINKEBY } from '../constants/constants'
let newState

const stake = (state, action) => {
  var stakeState = extend({
    intro: "Stake Token  (STK)",
    welcomeText: "The future of crypto economics",
    stakeAddress: STAKEADDRESS,
    contractAddress: RINKEBY,
    loaded: false,
    hasStakerAccount:false,
    numberOfTokens: 0,
    time: null,
    returnTokens: null,
    redeemed: null,
    precentGained: null,
  }, state)

  switch (action.type) {
    case 'UPDATE_TOKEN_INFO':
      newState = extend(stakeState, {
        numberOfTokens: action.numberOfTokens,
        time: action.time,
        returnTokens: action.returnTokens,
        redeemed: action.redeemed,
        precentGained: action.precentGained,
        loaded: action.loaded
      })
      return newState
    case 'UPDATE_LOADED':
      newState = extend(stakeState, {
        loaded: action.loaded
      })
      return newState
    default:
      return stakeState
  }
}

export default stake