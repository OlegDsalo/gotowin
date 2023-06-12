import React from 'react';
import './Questions.scss'
import binance from '../../assets/coins/binanceLarge2.png'
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";

const Questions = () => {
    return (
        <div className="questions">
            <div className="questions-headline">Frequently asked questions
            </div>
            <div className="questions-text">Here are some tips to help you get the most</div>
            <div className="questions-list">
                <div className="questions-item">How to get cryptocurrency?<PlusIcon className='questions-icon'/></div>
                <div className="questions-item">What are the payment methods?<PlusIcon className='questions-icon'/>
                </div>
                <div className="questions-item">Can I get compensation?<PlusIcon className='questions-icon'/></div>
                <div className="questions-item">Is it possible to withdraw funds?<PlusIcon className='questions-icon'/>
                </div>
                <div className="questions-item">How long can I expect a response?<PlusIcon className='questions-icon'/>
                </div>
            </div>
            <img className='questions-coin' src={binance} alt='coin'/>
        </div>
    );
};

export default Questions;
