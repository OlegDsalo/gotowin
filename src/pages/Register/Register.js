import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import classes from "./register.module.scss";

const Register = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => console.log(data);


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
                            <Input placeholder='Full name' args={{...register("FullName")}}/>
                            <Input placeholder='Email Address' args={{...register("EmailAddress")}}/>
                            <Input placeholder='Password' args={{...register("Password")}}/>
                            <Input placeholder='Confirm Password' args={{...register("Confirm Password")}}/>
                        </div>
                        <div className={classes.form__actions}>
                            <Button click='submit'>Continue</Button>
                            <div className={classes.form__actions_text}>Already have an account? <span>Log in</span></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
