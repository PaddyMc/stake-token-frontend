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
  const transferForm = getState().form.transfer
  const [account] = await web3.eth.getAccounts();

  if(!transferForm.syncErrors){
    await staketoken.methods.transfer(transferForm.values.address, web3.utils.toWei(transferForm.values.amount, "ether")).send({
      from: account 
    })
  }
}

export const stake = () => async (dispatch, getState) => {
  const stakeForm = getState().form.stake

  if(!stakeForm.syncErrors){
    dispatch(updateLoaded(false))
    const [account] = await web3.eth.getAccounts();

    var staked = staketoken.events.Staked({from: account})
    staked.subscribe((err, result) => { 
      if (err) {
        return;
      }

      dispatch(getHomeData())
    });

    await staketoken.methods.stake().send({
      from: account,
      value: web3.utils.toWei(stakeForm.values.stake, "ether")
    }).catch((err) => {
      dispatch(updateLoaded(true))
    })
  }
}

export const redeemStake = () => async (dispatch) => {
  dispatch(updateLoaded(false))
  const [account] = await web3.eth.getAccounts();

  var paidOut = staketoken.events.PaidOut({from: account})
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

export const validateStake = values => {
  const errors = {}
  if (!values.stake) {
    errors.stake = ''
  } else if (!/^\d+$/.test(values.stake)) {
    errors.stake = "Please enter a number"
  }
  return errors
}

export const validateTransfer = (values) => {
  const errors = {}
  if (!values.address) {
    errors.address = ''
  } else if (!web3.utils.isAddress(values.address)) {
    errors.address = 'Please ensure the Ethereum Address is correct'
  } else if (!values.amount) {
    errors.amount = ''
  } else if (!/^\d+$/.test(values.amount)){
    errors.amount = "Please enter a number"
  }
  return errors
}