import React from 'react';
import classes from './Contact.module.scss'
import bitcoin from '../../assets/coins/bitcoinHome.png';
import ethereum from '../../assets/coins/ethereumHome.png'
import cardano from '../../assets/coins/cardanoHome.png'
import stellar from '../../assets/coins/stellarHome.png'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <img className={`${classes.contact__coin} ${classes.contact__coin_bitcoin}`} src={bitcoin} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_etherium}`} src={ethereum} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_cardano}`} src={cardano} alt="coin"/>
            <img className={`${classes.contact__coin} ${classes.contact__coin_stellar}`} src={stellar} alt="coin"/>
            <div className={classes.contact__content}>
                <p className={classes.contact__text}>Have a question?</p>
                <h1 className={classes.contact__title}>Let’s keep in touch</h1>
                <a className={classes.contact__button} href='mailto:vatix40933@semonir.com'>Send A Message</a>
            </div>
        </div>
    );
};

export default Contact;
