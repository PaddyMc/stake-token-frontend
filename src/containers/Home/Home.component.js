import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import ContractInfo from '../../components/ContractInfo/ContractInfo'
import StakerInfo from '../../components/StakerInfo/StakerInfo'
import ContractActions from '../../components/ContractActions/ContractActions'
import Spinner from 'react-spinkit'
import Footer from '../../components/Footer/Footer'
import './Home.css';

class Home extends Component {
  componentWillMount = () => {
    const {
      getHomeData
    } = this.props

    getHomeData()
  }

  render() {
    const {
      intro,
      welcomeText,
      loaded,
      numberOfTokens,
      time,
      returnTokens,
      redeemed,
      precentGained,
      transferTokens,
      stake,
      redeemStake,
      stakeAddress,
      contractAddress,
    } = this.props

    return (
      <div className="home-full-screen">
        <Header
          intro={intro}
          welcomeText={welcomeText}
        />
        <ContractInfo 
          stakeAddress={stakeAddress}
          contractAddress={contractAddress}
        />     
        {
          loaded ? 
            (
              <div className="home-fill-available-space">
                <StakerInfo 
                  numberOfTokens={numberOfTokens}
                  time={time}
                  returnTokens={returnTokens}
                  redeemed={redeemed}
                  precentGained={precentGained}
                />
                <ContractActions 
                  transferTokens={transferTokens}
                  stake={stake}
                  redeemStake={redeemStake}
                />
              </div>
            ) : (
              <div className="home-fill-available-space">
                <div className="home-spinner ">
                  <Spinner name="cube-grid" fadeIn='none' color="white"/>
                </div>
                <div className="app-text">Fetching data from the Ethereum blockchain...</div>
              </div>
            )
        }
        <Footer />
      </div>
    );
  }
}

export default Home;