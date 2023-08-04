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

const Login = () => {
    const {navigateToResetPassword, navigateToUser} = useAppNavigation()

    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const loginResponse = await accountServiceInstance.login(data);
            // console.log('token', loginResponse.data.idToken)
            localStorage.setItem('token', loginResponse.data.idToken);

            const userResponse = await accountServiceInstance.getUser();
            console.log('user', userResponse.data);

            navigateToUser();
        } catch (error) {
            // console.error('Error:', error?.response?.data || error.message);
            setError(error)
        }
        console.log('dog',error)
        // accountServiceInstance.login(data).then(res => {
        //     console.log('token', res.data.idToken)
        // localStorage.setItem('token', res)
        // accountServiceInstance.getUser().then(user => {
        //     console.log('user', user)
        //     navigateToUser()
        // }).catch(e => console.log(e.response.data))
        // }).catch(e => console.log(e?.response?.data))
    }
    return (
        <div className='form_bg'>
            <Header/>
            {error && <div>
                {error?.message}
            </div>}
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
