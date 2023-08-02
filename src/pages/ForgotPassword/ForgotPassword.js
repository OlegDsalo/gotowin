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

const ForgotPassword = () => {
    const {navigateToLogin} = useAppNavigation()

    const [condition, setCondition] = useState(true)
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        accountServiceInstance.resetPasswordMessage(data).then((r) =>
            console.log('condidion', condition)
        )
        setCondition(false);
        console.log(123)
    }
    return (
        <div className='form_bg'>
            <Header/>
            {condition ? (
                    <FormCard
                        title='Recovery Email Sent!'
                        subtitle='Type in your registered email address to reset password'>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={classes.form__inputs}>
                                <Input placeholder='Email Address'
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
