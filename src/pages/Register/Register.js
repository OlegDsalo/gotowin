import React from 'react';
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";
import Header from "../../components-ui/Header/Header";
import classes from "./Register.module.scss";
import accountServiceInstance from "../../service/AccountService";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => {
        console.log(data);
        accountServiceInstance.register(data)
    }


    return (
        <div className={classes.wrapper}>
            <Header/>
            <div className={classes.register}>
                <div className={classes.card}>
                    <div className={classes.card__back}><ChevronLeft/></div>
                    <h1 className={classes.card__title}>Create Account</h1>
                    <p className={classes.card__subtitle}>Lorem ipsum dolor sit amet, con</p>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.form__inputs}>
                            <Input placeholder='Full name'
                                   args={{...register("fullName", {required: 'FullName is required'})}}
                                   error={errors?.name?.message}/>
                            <Input placeholder='Email Address' error={errors?.email?.message}
                                   args={{...register("email", {required: 'Email Address is required'})}}/>
                            <Input placeholder='Password' error={errors?.password?.message} type='password'
                                   args={{...register("password", {required: 'Password is required'})}}/>
                            <Input placeholder='Confirm Password' error={errors?.confirmPassword?.message}
                                   type='password'
                                   args={{...register("confirmPassword")}}/>
                        </div>
                        <div className={classes.form__actions}>
                            <Button click='submit'>Continue</Button>
                            <div
                                className={classes.form__actions_text}
                                onClick={navigateToLogin}
                            >
                                Already have an account?
                                <span className={classes.form__actions_link}>Log in</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
