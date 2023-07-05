import React, {useEffect} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useNavigate, useParams} from "react-router-dom";

const ConfirmEmail = () => {
    const navigate = useNavigate();
    let {key} = useParams();
    const navigateToLogin = () => navigate('/login')
    useEffect(() => {
        accountServiceInstance.activate(key)
        // const timer = setTimeout(() => {
        //     navigateToLogin()
        // }, 2000);
        // return () => {
            // clearTimeout(timer)
        // }
    }, [key])

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Confirm email
            </div>
        </div>
    );
};

export default ConfirmEmail;
