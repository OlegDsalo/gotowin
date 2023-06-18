import React from 'react';
import binanceCoin from "../../assets/coins/BinanceCoin2.png";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import classes from './BlockChain.module.scss'
import binance from '../../assets/coins/binanceUser.png'
import bitcoin from '../../assets/coins/bitcoinUser.png'
import lite from '../../assets/coins/liteUser.png'
import stellar from '../../assets/coins/stellarUser.png'
import ethereum from '../../assets/coins/ethereumUser.png'
import cardano from '../../assets/coins/cardanoUser.png'

const BlockChain = () => {
    return (
        <div className={classes.purchase}>
            <img src={binance} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_binance}`}/>
            <img src={bitcoin} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_bitcoin}`}/>
            <img src={lite} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_lite}`}/>
            <img src={stellar} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_stellar}`}/>
            <img src={ethereum} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_ethereum}`}/>
            <img src={cardano} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_cardano}`}/>
            <div className={classes.title}>Buy & Win</div>
            <div className={classes.purchase__subtitle}>Exchange blockchain in a few clicks</div>
            <div className={classes.purchase__calculator_bg}>
                <div className={classes.purchase__calculator}>
                    <div className={classes.purchase__title}>Blockchain</div>
                    <div className={classes.purchase__button_icon}><img src={binanceCoin} alt=""/>BSC</div>
                    <hr className={classes.purchase__line}/>
                    <div className={classes.purchase__label}>Chose price</div>
                    <div className={classes.purchase__inputs}>
                        <Input className={classes.purchase__input}/>
                        <Input className={classes.purchase__input}/>
                    </div>
                    <hr className={classes.purchase__line}/>
                    <Button className={classes.purchase__button}>Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default BlockChain;
