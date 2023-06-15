import React from 'react';
import binanceCoin from "../../assets/coins/BinanceCoin2.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './BlockChain.scss'

const BlockChain = () => {
    return (
        <div className="purchase">
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
