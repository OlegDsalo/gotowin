import React from 'react';
import classes from './Wallet.module.scss'
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import  Sparkle from "../../assets/elements/sparkleSmall.png";

const Wallet = () => {
    return (
        <div className={classes.wallet}>
            <img className={classes.title__icon} src={Sparkle} alt=""/>
            <div className={classes.title}>My wallet</div>
            <div className={classes.wallet__wrapper}>
                <div className={classes.wallet__card}>
                    <div className={classes.wallet__row}>
                        <div className={classes.wallet__title}>GOTOWIN</div>
                        <div className={classes.wallet__box}></div>
                    </div>
                    <div className={classes.wallet__label}>Balance</div>
                    <div className={classes.wallet__balance}>$00.00</div>
                    <div className={classes.wallet__action}>
                        <div className={classes.wallet__action_text}>Paste your wallet address</div>
                    </div>
                </div>
                <div className={classes.wallet__box}>
                    <Plus/>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
