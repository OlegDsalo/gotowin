import React from 'react';
import classes from './ErrorModal.module.scss'
import Button from "../Button/Button";
import errorImg from '../../assets/errorImg.png'

const ErrorModal = ({error, clearError}) => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <img className={classes.error_img} src={errorImg}
                     alt="error"/>
                <div className={classes.status_code}>Oops!</div>
                <div className={classes.message}>{error?.response?.data?.message || error.message} </div>
                <Button
                    className={classes.test}
                    size='small'
                    onClick={clearError}>
                    Close</Button>
            </div>
        </div>
    );
};

export default ErrorModal;
