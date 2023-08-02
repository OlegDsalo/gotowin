import React, {useEffect} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useParams} from "react-router-dom";
import {useAppNavigation} from "../../hook/useAppNavigation";

const ConfirmEmail = () => {
    const {navigateToLogin} = useAppNavigation()
    let {key} = useParams();

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
