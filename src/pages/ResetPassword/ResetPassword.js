import React, {useEffect} from 'react';
import Header from "../../components-ui/Header/Header";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {useForm} from "react-hook-form";
import accountServiceInstance from "../../service/AccountService";
import classes from './ResetPassword.module.scss'
import { useParams} from "react-router-dom";
import FormCard from "../../components-ui/FormCard/FormCard";
import Footer from "../../components-ui/Footer/Footer";
import {useAppNavigation} from "../../hook/useAppNavigation";

const ResetPassword = () => {
const {navigateToLogin} = useAppNavigation();
    let {key} = useParams();

    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => {
        let obj = {...data, key}
        accountServiceInstance.resetPassword(obj).then(
            navigateToLogin()
        )
    }
    return (
        <div className='form_bg'>
            <Header/>
            <FormCard title='Reset your password' subtitle='Type in your new password'>
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
            </FormCard>
            <Footer/>
        </div>
    );
};

export default ResetPassword;
