import React, {useState} from 'react';
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import classes from './Login.module.scss'
import {useForm} from "react-hook-form";
import Header from "../../components-ui/Header/Header";
import accountServiceInstance from "../../service/AccountService";
import FormCard from "../../components-ui/FormCard/FormCard";
import Footer from "../../components-ui/Footer/Footer";
import {useAppNavigation} from "../../hook/useAppNavigation";
import ErrorModal from "../../components-ui/ErrorModal/ErrorModal";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import PageTitle from "../../utils/pageTitle";


const schema = yup.object({
    email: yup.string().required('Email is required').email('Email is not valid!.'),
    password: yup.string().required('Password is required').min(4, "Password must be at least 4 characters"),
})
const Login = () => {
    const {navigateToResetPassword, navigateToProfile} = useAppNavigation()
    const [error, setError] = useState(null);


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const loginResponse = await accountServiceInstance.login(data);
            localStorage.setItem('token', loginResponse);

            navigateToProfile();
        } catch (error) {
            setError(error)
        }
    }
    const clearError = () => {
        setError(null)
    }
    return (
        <div className='form_bg'>
            <PageTitle title='Login In'></PageTitle>
            <Header/>
            {error && <ErrorModal error={error} clearError={clearError}/>}
            <FormCard title='Hey, Welcome Back!' subtitle='We are very happy to see you back!'>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form__inputs}>
                        <Input placeholder='Email Address' error={errors?.email?.message}
                               args={{...register("email", {required: 'Email is required'})}}/>
                        <Input placeholder='Password' type='password' error={errors?.password?.message}
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
