import React from 'react';
import loginBg from "../../assets/test-logo.png";
import Button from "../button/Button";
import './Header.scss'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')
    const navigateToSignIn = () => navigate('/Register')
    return (
        <header className='header'>
            <div className='header-logo'>
                <img src={loginBg} alt="logo" className='header-logo-img'/>
                <p className='header-name'>GO TO WIN</p>
            </div>
            <div className="header-actions">
                <Button onClick={navigateToLogin} type='outlined' size='small'>Log In</Button>
                <Button onClick={navigateToSignIn} size='small'>Sign Up</Button>
            </div>
        </header>
    );
};

export default Header;
