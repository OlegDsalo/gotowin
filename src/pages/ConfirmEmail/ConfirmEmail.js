import React, {useEffect} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useNavigate, useParams} from "react-router-dom";

const ConfirmEmail = () => {
    const navigate = useNavigate();
    let {key} = useParams();
    const navigateToLogin = () => navigate('/login')

    useEffect(() => {
        if (key) {
            accountServiceInstance.activate(key)
                .then(response => {
                    navigateToLogin()
                })
                .catch(error => console.log(error))
        }
    }, []);

    return (
        <div className='form_bg'>
            <div className={classes.wrapper}>
                <div className={classes.wrapper_text}>
                   <div className={classes.title}>
                       Confirmation of email
                   </div>
                    <div className={classes.title}>
                        ... Wait
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmail;
