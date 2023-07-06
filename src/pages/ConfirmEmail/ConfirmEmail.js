import React, {useEffect} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ConfirmEmail = () => {
    const navigate = useNavigate();
    let {key} = useParams();
    const navigateToLogin = () => navigate('/login')

    useEffect(() => {
        console.log('key', key);
        if (key) {
            axios.get(`http://localhost:8080/api/activate?key=${key}`)
                .then(response => {
                    console.log('success');
                    navigateToLogin();
                })
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Confirm email
            </div>
        </div>
    );
};

export default ConfirmEmail;
