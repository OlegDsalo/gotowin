import React, {useState} from 'react';
import classes from "../ResetPasswordMail/ResetPasswordMail.module.scss";
import Header from "../../components-ui/Header/Header";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import {useForm} from "react-hook-form";
import accountServiceInstance from "../../service/AccountService";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
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
                <FormCard>
                    {condition ? (<>
                            <h1 className={classes.card__title}>Reset your password</h1>
                            <p className={classes.card__subtitle}>Type in your registered email address to reset
                                password</p>
                            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={classes.form__inputs}>
                                    <Input placeholder='Email Address'
                                           args={{...register("email", {required: 'Email is required'})}}/>
                                </div>
                                <div className={classes.form__actions}>
                                    <Button click='submit'>Next</Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div>
                            <h1 className={classes.card__title}>Recovery Email Sent!</h1>
                            <p className={classes.card__subtitle}>Please check your email for next steps to reset your
                                password.</p>
                            <div className={classes.form__actions}>
                                <Button onClick={navigateToLogin}>Back to login</Button>
                            </div>
                        </div>
                    )}
                </FormCard>
            </div>
        </div>
    );
};

export default ResetPasswordMail;
