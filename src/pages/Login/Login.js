import React from 'react';
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import classes from './Login.module.scss'
import {useForm} from "react-hook-form";
import Header from "../../components-ui/Header/Header";
import accountServiceInstance from "../../service/AccountService";
import {useNavigate} from "react-router-dom";
import FormCard from "../../components-ui/FormCard/FormCard";
import Footer from "../../components-ui/Footer/Footer";

const Login = () => {
    const navigate = useNavigate();
    const navigateToResetPassword = () => navigate('/reset-mail')
    const navigateToUser = () => navigate('/user')

    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        accountServiceInstance.login(data).then(res => {
            console.log('token', res.data.idToken)
            localStorage.setItem('token', res.data.idToken)
            accountServiceInstance.getUser().then(user => {
                console.log('user', user)
                navigateToUser()
            })
        })
    }
    return (
        <div className='form_bg'>
            <Header/>
            <FormCard title='Hey, Welcome Back!' subtitle='We are very happy to see you back!'>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form__inputs}>
                        <Input placeholder='Email Address'
                               args={{...register("email", {required: 'Email is required'})}}/>
                        <Input placeholder='Password' type='password'
                               args={{...register("password")}}/>
                    </div>
                    <div className={classes.form__actions}>
                        <Button click='submit'>Login</Button>
                        <div className={classes.form__actions_text} onClick={navigateToResetPassword}>Forgot your
                            Password?
                        </div>
                    </div>
                </form>
            </FormCard>
            <Footer/>
        </div>
    );
};

export default Login;
