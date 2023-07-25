import React, {useState} from 'react';
import classes from './Questions.module.scss'
import binance from '../../assets/coins/binanceHome.png'
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";

const questions = [
    {
        question: 'How to get cryptocurrency?',
        answer: 'Here is the answer for "How to get cryptocurrency?"',
    },
    {
        question: 'What are the payment methods?',
        answer: 'Here is the answer for "What are the payment methods?"',
    },
    {
        question: 'Can I get compensation?',
        answer: 'Here is the answer for "Can I get compensation?"',
    },
    {
        question: 'Is it possible to withdraw funds?',
        answer: 'Here is the answer for "Is it possible to withdraw funds?"',
    },
    {
        question: 'How long can I expect a response?',
        answer: 'Here is the answer for "How long can I expect a response?"',
    },
    // Add more question-answer pairs as needed
];

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleQuestionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
    return (
        <div className={classes.questions}>
            <div className={classes.questions__headline}>Frequently asked questions</div>
            <div className={classes.questions__text}>Here are some tips to help you get the most</div>
            <div className={classes.questions__list}>
                {questions.map((question, index) =>
                    <div key={'b'+index} >
                        <div  className={classes.questions__item} onClick={() => handleQuestionClick(index)}
                        >{question.question}<PlusIcon className='questions-icon'/>
                        </div>
                        {activeIndex === index && <div  className={classes.answer}>{question.answer}</div>}
                    </div>
                )
                }
            </div>
            <img className={classes.questions__coin} src={binance} alt='coin'/>
        </div>
    );
};

export default Questions;
