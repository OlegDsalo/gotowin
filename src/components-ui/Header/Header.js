import React from 'react';
import loginBg from "../../assets/test-logo.png";
import Button from "../Button/Button";
import classes from './Header.module.scss'
import {useNavigate} from "react-router-dom";
import {ReactComponent as UserIcon} from "../../assets/icons/user.svg";

const Header = ({user = null}) => {
    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')
    const navigateToSignIn = () => navigate('/register')
    const navigateToHome = () => navigate('/')
    const signOutHandler = () => {
        localStorage.removeItem('token')
        navigateToLogin()
    }
    return (
        <header className={classes.header}>
            <div className={classes.header__logo} onClick={navigateToHome}>
                <img src={loginBg} alt="logo" className={classes.header__logo_img}/>
                <p className={classes.header__name}>GO TO WIN</p>
            </div>
            {user ? <div className={classes.header__actions_logined}>
                    <Button onClick={signOutHandler} size='small' type='secondary'>Sign Out</Button>
                    <UserIcon onClick={navigateToHome} className={classes.header__actions_logined_icon}/>
                </div>
                :
                <div className={classes.header__actions}>
                    <Button onClick={navigateToLogin} type='outlined' size='small'>Log In</Button>
                    <Button onClick={navigateToSignIn} size='small'>Sign Up</Button>
                </div>
            }
        </header>
    );
};

export default Header;
