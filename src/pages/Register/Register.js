import React from 'react';
import classes from "../Login/Login.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className={classes.login}>
            <div className={classes.card}>
                <div className={classes['card-back']}><ChevronLeft/></div>
                <h1 className={classes['card-title']}>Create Account</h1>
                <p className={classes['card-subtitle']}>Lorem ipsum dolor sit amet, con</p>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes['form-inputs']}>
                        <Input placeholder='Full name' args={{...register("FullName")}}/>
                        <Input placeholder='Email Address' args={{...register("EmailAddress")}}/>
                        <Input placeholder='Password' args={{...register("Password")}}/>
                        <Input placeholder='Confirm Password' args={{...register("Confirm Password")}}/>
                    </div>
                    <div className={classes['form-actions']}>
                        <Button click='submit'>Continue</Button>
                        <div className={classes['form-actions-text']}>Already have an account? <span>Log in</span></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
