import React, {useState} from 'react';
import classes from "../ResetPasswordMail/ResetPasswordMail.module.scss";
import Header from "../../components-ui/Header/Header";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {useForm} from "react-hook-form";
import accountServiceInstance from "../../service/AccountService";
import {useNavigate} from "react-router-dom";
import FormCard from "../../components-ui/FormCard/FormCard";

const ResetPasswordMail = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')
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
        <div className={classes.wrapper}>
            <Header/>
            <div className={classes.container}>
                {condition ? (
                        <FormCard
                            title='Reset your password sub'
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
                        <div className={classes.recovery}>
                            <FormCard
                                title='Recovery Email Sent!'
                                subtitle='Please check your email for next steps to reset your password'>
                                <div className={classes.form__actions}>
                                    <Button onClick={navigateToLogin}>Back to login</Button>
                                </div>
                            </FormCard>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default ResetPasswordMail;
