import React, {useEffect} from 'react';
import Header from "../../components-ui/Header/Header";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";
import accountServiceInstance from "../../service/AccountService";
import classes from './ResetPassword.module.scss'
import {useNavigate, useParams} from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();
    let {key} = useParams();
    // const navigateToLogin = () => navigate('/login')

    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => {
        console.log(key);
        let obj = {...data, key}
        console.log(obj)
        accountServiceInstance.resetPassword(obj)
    }
    return (
        <div className={classes.wrapper}>
            <Header/>
            <div className={classes.container}>
                <div className={classes.card}>

                    <div className={classes.card__back}><ChevronLeft/></div>
                    <h1 className={classes.card__title}>Reset your password</h1>
                    <p className={classes.card__subtitle}>Type in your new password</p>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.form__inputs}>
                            <Input placeholder='New password *'
                                   args={{...register("newPassword", {required: 'Email is required'})}}/>
                            <Input placeholder='Retry new password *' type='password'
                                   args={{...register("newPasswordConfirm")}}/>
                        </div>
                        <div className={classes.form__actions}>
                            <Button click='submit'>Reset</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
