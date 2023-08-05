import React from 'react';
import classes from './ErrorModal.module.scss'
import Button from "../Button/Button";

const ErrorModal = ({error, clearError}) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.status_code}>{error?.response?.status}</div>
            <div className={classes.message}>{error?.response?.statusText}</div>
            <Button
                className={classes.test}
                size='small'
                onClick={clearError}>
                Close</Button>
        </div>
    );
};

export default ErrorModal;
