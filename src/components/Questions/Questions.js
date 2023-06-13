import React from 'react';
import classes from './Questions.module.scss'
import binance from '../../assets/coins/binanceLarge2.png'
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";

const Questions = () => {
    return (
        <div className={classes.questions}>
            <div className={classes.questions__headline}>Frequently asked questions
            </div>
            <div className={classes.questions__text}>Here are some tips to help you get the most</div>
            <div className={classes.questions__list}>
                <div className={classes.questions__item}>How to get cryptocurrency?<PlusIcon className='questions-icon'/></div>
                <div className={classes.questions__item}>What are the payment methods?<PlusIcon className='questions-icon'/>
                </div>
                <div className={classes.questions__item}>Can I get compensation?<PlusIcon className='questions-icon'/></div>
                <div className={classes.questions__item}>Is it possible to withdraw funds?<PlusIcon className='questions-icon'/>
                </div>
                <div className={classes.questions__item}>How long can I expect a response?<PlusIcon className='questions-icon'/>
                </div>
            </div>
            <img className={classes.questions__coin} src={binance} alt='coin'/>
        </div>
    );
};

export default Questions;
