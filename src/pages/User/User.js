import React, {useEffect} from 'react';
import Footer from "../../components-ui/Footer/Footer";
import Header from "../../components-ui/Header/Header";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import './User.scss'
import Referral from "../../components/Referral/Referral";
import Wallet from "../../components/Wallet/Wallet";
import Cases from "../../components/Cases/Cases";
import BlockChain from "../../components/BlockChain/BlockChain";
import axios from "axios";
import accountServiceInstance from "../../service/AccountService";
function useAsyncEffect(effect, destroy, inputs) {
    var hasDestroy = typeof destroy === 'function';

    React.useEffect(function () {
        var result;
        var mounted = true;
        var maybePromise = effect(function () {
            return mounted;
        });

        Promise.resolve(maybePromise).then(function (value) {
            result = value;
        });

        return function () {
            mounted = false;

            if (hasDestroy) {
                destroy(result);
            }
        };
    }, hasDestroy ? inputs : destroy);
}

const User = () => {


    useAsyncEffect(async () => {
        await accountServiceInstance.getUser();
    });
    // useEffect(()=>{
    // })
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
