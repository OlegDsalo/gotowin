import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import classes from './Login.module.scss'
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";

const Login = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className={classes.wrapper}>
            <Header/>
            <div className={classes.login}>
                <div className={classes.card}>
                    <div className={classes['card-back']}><ChevronLeft/></div>
                    <h1 className={classes['card-title']}>Hey, Welcome Back!</h1>
                    <p className={classes['card-subtitle']}>We are very happy to see you back!</p>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes['form-inputs']}>
                            <Input placeholder='Email Address' args={{...register("emailAddress")}}/>
                            <Input placeholder='Password' args={{...register("fullName")}}/>
                        </div>
                        <div className={classes['form-actions']}>
                            <Button click='submit'>Login</Button>
                            <div className={classes['form-actions-text']}>Forgot your Password?</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
};

export default Login;
