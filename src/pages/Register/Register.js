import React, {useState} from 'react';
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
import ErrorModal from "../../components-ui/ErrorModal/ErrorModal";
import PageTitle from "../../utils/pageTitle";
import {ReactComponent as Checked} from "../../assets/icons/Check2.svg";

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
        formState: {errors},
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const [checked, setChecked] = useState(false)
    const [checkedError, setCheckedError] = useState(null)
    const [error, setError] = useState(null);
    const onCheckBoxChangeHandler = (event) => {
        setChecked(event.target.checked)
        setCheckedError(false)
    }

    let {key} = useParams();

    const onSubmit = async (data) => {
        console.log(data);
        if (checked === false) {
            setCheckedError(true);
            return;
        }
        try {
            let refferalCode = key ? key : "";
            let user = {...data, referralCode: refferalCode};
            await accountServiceInstance.register(user);
            navigateToLogin()
        } catch (error) {
            setError(error)
        }
    }
    const clearError = () => {
        setError(null)
    }
    return (
        <div className='form_bg'>
            <PageTitle title='Sign up'></PageTitle>
            <Header/>
            {error && <ErrorModal error={error} clearError={clearError}/>}
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
                               type='password' autocomplete="new-password"
                               args={{...register("confirmPassword")}}/>
                        <label className={classes.checkbox_label}>
                            <input className={classes.checkbox_input} checked={checked}  type='checkbox'
                                   onChange={onCheckBoxChangeHandler}></input>
                            <Checked class={classes.checkbox_checked}></Checked>
                            <div className={classes.checkbox_title}>
                                I agree to the Terms & Conditions
                            </div>
                        </label>
                        {checkedError && <span className={classes.checkbox_error}>This field is required</span>}
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
