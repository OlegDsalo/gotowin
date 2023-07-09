import React, {useEffect} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useNavigate, useParams} from "react-router-dom";

const ConfirmEmail = () => {
    const navigate = useNavigate();
    let {key} = useParams();
    const navigateToLogin = () => navigate('/login')

    useEffect(() => {
        console.log('key', key);
        if (key) {
            accountServiceInstance.activate(key)
                .then(response => {
                    console.log('success');
                    navigateToLogin()
                })
                .catch(error => console.log(error))
        }
    }, []);

    return (
        <div className='form_bg'>
            <div className={classes.title}>
                Confirm email
            </div>
        </div>
    );
};

export default ConfirmEmail;
