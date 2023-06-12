import React from 'react';
import Logo from '../../assets/test-logo.png'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-left'>
                <div className='footer-left-row'>
                    <img className='footer-logo' src={Logo} alt={'logo'}/>
                    <p className='logo-name'>GOTOWIN</p>
                </div>
                <p className='footer-text'>© 2022 GOTOWIN.</p>
            </div>
            <div className="footer-right">
                <h1 className='footer-header'>Mail</h1>
                <p className='footer-text'>gotowin2023@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
