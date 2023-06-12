import React from 'react';
import Button from "../button/Button";
import './Contact.scss'
import bitcoin from '../../assets/coins/bitcoinLarge.png';
import etherium from '../../assets/coins/entheriumLarge.png'
import cardano from '../../assets/coins/cardanoLarge.png'
import stellar from '../../assets/coins/stellarLarge.png'

const Contact = () => {
    return (
        <div className='contact'>
            <img className='contact-coin contact-coin-bitcoin' src={bitcoin} alt="coin"/>
            <img className='contact-coin contact-coin-etherium' src={etherium} alt="coin"/>
            <img className='contact-coin contact-coin-cardano' src={cardano} alt="coin"/>
            <img className='contact-coin contact-coin-stellar' src={stellar} alt="coin"/>
            <div className='contact-content'>
                <div className="ellipse-bg"></div>
                <p className="contact-text">Have a question?</p>
                <h1 className="contact-title">Let’s keep in touch</h1>
                <Button className='contact-button'>Send A Message</Button>
            </div>
        </div>
    );
};

export default Contact;
