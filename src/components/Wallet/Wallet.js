import React from 'react';
import './Wallet.scss'

const Wallet = () => {
    return (
        <div className='wallet'>
            <div className='title'>My wallet</div>
            <div className='wallet__card'>
                <div className="wallet__row">
                    <div className='wallet__title'>GOTOWIN</div>
                    <div className='wallet__box'></div>
                </div>
                <div className='wallet__label'>Balance</div>
                <div className='wallet__balance'>$00.00</div>
                <div className='wallet__action'>
                    <div className='wallet__action_text'>Paste your wallet address</div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
