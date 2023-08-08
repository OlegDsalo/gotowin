import React, {useState} from 'react';
import classes from "./ForgotPassoword.module.scss";
import Header from "../../components-ui/Header/Header";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {useForm} from "react-hook-form";
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
})

const ForgotPassword = () => {
    const {navigateToLogin} = useAppNavigation()
    const [error, setError] = useState(null);
    const [condition, setCondition] = useState(true)

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
            await accountServiceInstance.resetPasswordMessage(data)
            setCondition(false);
        } catch (e) {
            setError(e)
        }
    }
    const clearError = () => {
        setError(null)
    }
    return (
        <div className='form_bg'>
            <Header/>
            <PageTitle title='Forgot Password'></PageTitle>

            {error && <ErrorModal error={error} clearError={clearError}/>}
            {condition ? (
                    <FormCard
                        title='Recovery Email Sent!'
                        subtitle='Type in your registered email address to reset password'>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={classes.form__inputs}>
                                <Input placeholder='Email Address'  error={errors?.email?.message}
                                       args={{...register("email", {required: 'Email is required'})}}/>
                            </div>
                            <div className={classes.form__actions}>
                                <Button click='submit'>Next</Button>
                            </div>
                        </form>
                    </FormCard>
                ) :
                (
                    <FormCard
                        title='Recovery Email Sent!'
                        subtitle='Please check your email for next steps to reset your password'>
                        <div className={classes.form__actions}>
                            <Button onClick={navigateToLogin}>Back to login</Button>
                        </div>
                    </FormCard>
                )}
            <Footer/>
        </div>
    );
};

export default ForgotPassword;
