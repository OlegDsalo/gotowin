import React from 'react';
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {useForm} from "react-hook-form";
import Header from "../../components-ui/Header/Header";
import classes from "./Register.module.scss";
import accountServiceInstance from "../../service/AccountService";
import FormCard from "../../components-ui/FormCard/FormCard";
import Footer from "../../components-ui/Footer/Footer";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useAppNavigation} from "../../hook/useAppNavigation";
import {useParams} from "react-router-dom";

const schema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().required('Email is required').email('Email is not valid!.'),
    password: yup.string().required('Password is required').min(4, "Password must be at least 4 characters"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Password must be match."),
})

const Register = () => {
    const {navigateToLogin} = useAppNavigation()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    let {key} = useParams();

    const onSubmit = data => {
        // console.log(data);
        console.log('key',key)
        let refferalCode = key ? key: "";
        let user={...data,referralCode:refferalCode}
        console.log(user)
        accountServiceInstance.register(user).then(navigateToLogin())


    }

    return (
        <div className='form_bg'>
            <Header/>
            <FormCard title='Create Account' subtitle='Lorem ipsum dolor sit amet, con'>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form__inputs}>
                        <Input placeholder='Full name' error={errors?.fullName?.message}
                               args={{...register("fullName")}}
                        />
                        <Input placeholder='Email Address' error={errors?.email?.message}
                               args={{...register("email")}}/>
                        <Input placeholder='Password' error={errors?.password?.message} type='password'
                               args={{...register("password")}}/>
                        <Input placeholder='Confirm Password' error={errors?.confirmPassword?.message}
                               type='password'
                               args={{...register("confirmPassword")}}/>
                    </div>
                    <div className={classes.form__actions}>
                        <Button click='submit'>Create account</Button>
                        <div className={classes.form__actions_text} onClick={navigateToLogin}>
                            Already have an account?
                            <span className={classes.form__actions_link}>Log in</span>
                        </div>
                    </div>
                </form>
            </FormCard>
            <Footer/>
        </div>
    );
};

export default Register;
