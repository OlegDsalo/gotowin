import React from 'react';
import Button from "../Button/Button";
import classes from './Contact.module.scss'
import bitcoin from '../../assets/coins/bitcoinLarge.png';
import etherium from '../../assets/coins/entheriumLarge.png'
import cardano from '../../assets/coins/cardanoLarge.png'
import stellar from '../../assets/coins/stellarLarge.png'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <img className={`${classes.contact__coin} ${classes.contact__coin_bitcoin}`} src={bitcoin} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_etherium}`} src={etherium} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_cardano}`} src={cardano} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_stellar}`} src={stellar} alt="coin"/>
            <div className={classes.contact__content}>
                <div className={classes.ellipse__bg}></div>
                <p className={classes.contact__text}>Have a question?</p>
                <h1 className={classes.contact__title}>Let’s keep in touch</h1>
                <Button className={classes.contact__button}>Send A Message</Button>
            </div>
        </div>
    );
};

export default Contact;
