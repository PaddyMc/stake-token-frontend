import web3 from '../services/contract-utils/web3';
import staketoken from '../services/contract-utils/staketoken';

const updateStakerInfo = (numberOfTokens, time, returnTokens, redeemed, precentGained, loaded) => ({
  type: 'UPDATE_TOKEN_INFO',
  numberOfTokens,
  time,
  returnTokens,
  redeemed,
  precentGained,
  loaded
})

const updateLoaded = (loaded) => ({
  type: 'UPDATE_LOADED',
  loaded
})

export const getHomeData = () => async (dispatch) => {
  const [account] = await web3.eth.getAccounts();

  try {
    let balance = await staketoken.methods.balanceOf(account).call({
      from: account 
    })
  
    const stakerInfo = await getStakeAccount()
    const date = new Date(0).setUTCSeconds(Number(stakerInfo[1]))
  
    dispatch(updateStakerInfo(web3.utils.fromWei(balance, "ether"), date, stakerInfo[2], stakerInfo[4], stakerInfo[3], true))
  } catch (err) {
    dispatch(updateLoaded(true))
  }
}

export const transferTokens = () => async (dispatch, getState) => {
  const transferForm = getState().form.transfer.values
  const [account] = await web3.eth.getAccounts();

  await staketoken.methods.transfer(transferForm.address, web3.utils.toWei(transferForm.amount, "ether")).send({
    from: account 
  })
}

export const stake = () => async (dispatch, getState) => {
  const stakeForm = getState().form.stake.values
  dispatch(updateLoaded(false))
  const [account] = await web3.eth.getAccounts();

  var staked = staketoken.events.Staked({from: account});
  staked.subscribe((err, result) => { 
    if (err) {
      return;
    }

    dispatch(getHomeData())
  });

  await staketoken.methods.stake().send({
    from: account,
    value: web3.utils.toWei(stakeForm.stake, "ether")
  }).catch((err) => {
    dispatch(updateLoaded(true))
  })
}

export const redeemStake = () => async (dispatch) => {
  dispatch(updateLoaded(false))
  const [account] = await web3.eth.getAccounts();

  var paidOut = staketoken.events.PaidOut({from: account});
  paidOut.subscribe((err, result) => { 
    if (err) {
      return;
    }

    dispatch(getHomeData())
  });

  const balance = await staketoken.methods.balanceOf(account).call({
    from: account
  })

  await staketoken.methods.redeemStake(balance).send({
    from: account
  }).catch((err) => {
    dispatch(updateLoaded(true))
  })
}

const getStakeAccount = async () => {
  const [account] = await web3.eth.getAccounts();

  const stakerInfo = staketoken.methods.getStakeAccount().call({
    from: account,
  })

  return stakerInfo
}

export const validateStake = (values) => {
  const errors = {}
  if (!values.stake) {
    errors.stake = 'Required'
  } 
  return errors
}

export const validateTransfer = (values) => {
  const errors = {}
  if (!values.address) {
    errors.address = 'Required'
  } else if (!values.amount) {
    errors.amount = 'Required'
  }
  return errors
}