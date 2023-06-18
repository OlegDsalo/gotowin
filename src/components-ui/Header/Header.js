import React from 'react';
import loginBg from "../../assets/test-logo.png";
import Button from "../Button/Button";
import classes from './Header.module.scss'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')
    const navigateToSignIn = () => navigate('/Register')
    const navigateToHome = () => navigate('/')
    return (
        <header className={classes.header}>
            <div className={classes.header__logo} onClick={navigateToHome}>
                <img src={loginBg} alt="logo" className={classes.header__logo_img} />
                <p className={classes.header__name}>GO TO WIN</p>
            </div>
            <div className={classes.header__actions}>
                <Button onClick={navigateToLogin} type='outlined' size='small'>Log In</Button>
                <Button onClick={navigateToSignIn} size='small'>Sign Up</Button>
            </div>
        </header>
    );
};

export default Header;
