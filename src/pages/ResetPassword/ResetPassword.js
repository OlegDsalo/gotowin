import React from 'react';
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
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import PageTitle from "../../utils/pageTitle";

const schema = yup.object({
    newPassword: yup.string().required('Password is required').min(4, "Password must be at least 4 characters"),
    newPasswordConfirm: yup.string().oneOf([yup.ref('newPassword')], "Password must be match."),
})

const ResetPassword = () => {
const {navigateToLogin} = useAppNavigation();
    let {key} = useParams();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = async(data) => {
        let obj = {...data, key}
        await accountServiceInstance.resetPassword(obj)
        navigateToLogin()
    }
    return (
        <div className='form_bg'>
            <PageTitle title='Forgot Password'></PageTitle>
            <Header/>
            <FormCard title='Reset your password' subtitle='Type in your new password'>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form__inputs}>
                        <Input placeholder='New password *' type='password'  error={errors?.newPassword?.message}
                               args={{...register("newPassword", {required: 'Email is required'})}}/>
                        <Input placeholder='Retry new password *' type='password'  error={errors?.newPasswordConfirm?.message}
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
