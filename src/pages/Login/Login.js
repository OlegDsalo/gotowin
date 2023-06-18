import React from 'react';
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import classes from './Login.module.scss'
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";
import Header from "../../components-ui/Header/Header";

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
                    <div className={classes.card__back}><ChevronLeft/></div>
                    <h1 className={classes.card__title}>Hey, Welcome Back!</h1>
                    <p className={classes.card__subtitle}>We are very happy to see you back!</p>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.form__inputs}>
                            <Input placeholder='Email Address' args={{...register("emailAddress")}}/>
                            <Input placeholder='Password' args={{...register("fullName")}}/>
                        </div>
                        <div className={classes.form__actions}>
                            <Button click='submit'>Login</Button>
                            <div className={classes.form__actions_text}>Forgot your Password?</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
};

export default Login;
