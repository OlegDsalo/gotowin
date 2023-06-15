import React from 'react';
import binanceCoin from "../../assets/coins/BinanceCoin2.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './BlockChain.scss'
import binance from '../../assets/coins/binanceUser.png'
import bitcoin from '../../assets/coins/bitcoinUser.png'
import lite from '../../assets/coins/liteUser.png'
import stellar from '../../assets/coins/stellarUser.png'
import ethereum from '../../assets/coins/ethereumUser.png'
import cardano from '../../assets/coins/cardanoUser.png'

const BlockChain = () => {
    return (
        <div className="purchase">
            <img src={binance} alt="" className='purchase__coin purchase__coin_binance'/>
            <img src={bitcoin} alt="" className='purchase__coin purchase__coin_bitcoin'/>
            <img src={lite} alt="" className='purchase__coin purchase__coin_lite'/>
            <img src={stellar} alt="" className='purchase__coin purchase__coin_stellar'/>
            <img src={ethereum} alt="" className='purchase__coin purchase__coin_ethereum'/>
            <img src={cardano} alt="" className='purchase__coin purchase__coin_cardano'/>
            <div className="title">Buy & Win</div>
            <div className="purchase-subtitle">Exchange blockchain in a few clicks</div>
            <div className="purchase-calculator-bg">
                <div className="purchase-calculator">
                    <div className="purchase-title">Blockchain</div>
                    <div className="purchase-button"><img src={binanceCoin} alt=""/>BSC</div>
                    <hr className='purchase-line'/>
                    <div className='purchase-label'>Chose price</div>
                    <div className="purchase_inputs">
                        <Input className='purchase_input'/>
                        <Input className='purchase_input'/>
                    </div>
                    <hr className='purchase-line'/>
                    <Button className='purchase_button'>Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default BlockChain;
