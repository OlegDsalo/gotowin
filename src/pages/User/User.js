import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import Card from "../../components/Card/Card";
import bitcoinCoin from "../../assets/coins/Bitcoin.png";
import bnbCoin from "../../assets/coins/Binance.png";
import shibaInuCoin from "../../assets/coins/SHIBAINU.png";
import binanceCoin from "../../assets/coins/BinanceCoin2.png";
import './User.scss'

const User = () => {
    return (
        <div className='user-container'>
            <Header/>
            <div className='user user__bg'>
                <div className='user-border'>
                    <div className='user-back'><ChevronLeft/></div>
                    <img className='user-avatar'
                         src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""/>
                    <div className='user-name'>ANdt tupan</div>
                    <div className='user-text'>Lorem</div>
                </div>
            </div>
            <div className='wallet'>
                <div className='title'>My wallet</div>
                <div className='wallet-card'>
                    <div>GOTOWIN</div>
                    <div>Balance</div>
                    <div>$00.00</div>
                    <div>Paste your wallet address</div>
                </div>
            </div>
            <div className='cases'>
                <div className='title'>My Cases</div>
                <div className='cases-cards'>
                    <Card label='Limited' title='GOLDCASE' coin='Bitcoin' icon={bitcoinCoin}></Card>
                    <Card label='Premium' title='SILVER CASE' coin='BNB' icon={bnbCoin}></Card>
                    <Card label='Most popular' title='BRONZE CASE' coin='Shiba inu' icon={shibaInuCoin}></Card>
                </div>
            </div>
            <div className='referral'>
                <div className="title">Referrals</div>
                <div className="referral-cards">
                    <div className="referral-card referral-card-link">
                        <div className='referral-card-link'>
                            <div>Refer and Earn</div>
                            <div>Refer you Friend</div>
                            <div>And Win</div>
                            <div className='referral-card-link-button'>
                                Refer Now
                            </div>
                        </div>

                    </div>
                    <div className="referral-card referral-card-info">

                    </div>
                </div>
            </div>
            <div className="purchase">
                <div className="title">Buy & Win</div>
                <div className="purchase-subtitle">Exchange blockchain in a few clicks</div>
                <div className="purchase-calculator-bg">

                    <div className="purchase-calculator">
                        <div className="purchase-title">Blockchain</div>
                        <div className="purchase-button"><img src={binanceCoin} alt=""/>BSC</div>
                        <hr className='purchase-line'/>
                        <div className='purchase-label'>Chose price</div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default User;
