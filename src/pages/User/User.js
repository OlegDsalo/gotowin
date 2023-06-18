import React from 'react';
import Footer from "../../components-ui/Footer/Footer";
import Header from "../../components-ui/Header/Header";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import './User.scss'
import Referral from "../../components/Referral/Referral";
import Wallet from "../../components/Wallet/Wallet";
import Cases from "../../components/Cases/Cases";
import BlockChain from "../../components/BlockChain/BlockChain";

const User = () => {
    return (
        <div className='user-container'>
            <Header/>
            <div className='user user__bg'>
                <div className='user__border'>
                    <div className='user_box'>
                        <div className='user-back'><ChevronLeft/></div>
                        <img className='user-avatar'
                             src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""/>
                        <div className='user-name'>ANdt tupan</div>
                        <div className='user-text'>Lorem</div>
                    </div>
                </div>
            </div>
            <Wallet/>
            <Cases/>
            <Referral/>
            <BlockChain/>
            <Footer/>
        </div>
    );
};

export default User;
