import { connect } from 'react-redux'
import Home from './Home.component.js'
import { 
  getHomeData,
  transferTokens,
  stake,
  redeemStake
 } from '../../actions/actions' 

const mapStateToProps = (state) => {
  const {
    intro,
    welcomeText,
    loaded,
    numberOfTokens,
    time,
    returnTokens,
    redeemed,
    precentGained,
    stakeAddress,
    contractAddress,
  } = state.stake

  return {
    intro,
    welcomeText,
    loaded,
    numberOfTokens,
    time,
    returnTokens,
    redeemed,
    precentGained,
    stakeAddress,
    contractAddress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData: () => dispatch(getHomeData()),
    transferTokens: () => dispatch(transferTokens()),
    stake: () => dispatch(stake()),
    redeemStake: () => dispatch(redeemStake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)