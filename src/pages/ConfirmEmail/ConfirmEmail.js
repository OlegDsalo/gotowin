import React, {useState} from 'react';
import accountServiceInstance from "../../service/AccountService";
import classes from './ConfirmEmail.module.scss'
import {useParams} from "react-router-dom";
import {useAppNavigation} from "../../hook/useAppNavigation";
import ErrorModal from "../../components-ui/ErrorModal/ErrorModal";
import useAsyncEffect from "../../utils/AsyncEffect";
import PageTitle from "../../utils/pageTitle";

const ConfirmEmail = () => {
    const {navigateToLogin} = useAppNavigation()
    let {key} = useParams();

    const [error, setError] = useState(null);
    const clearError = () => {
        setError(null)
        navigateToLogin()
    }
    useAsyncEffect(async() => {
        if (key) {
            try{
                await  accountServiceInstance.activate(key)
                navigateToLogin()

            } catch(error){
               setError(error)
            }
        }
    }, []);

    return (
        <div className='form_bg'>
            <PageTitle title='Confirm Email'></PageTitle>
            {error && <ErrorModal error={error} clearError={clearError}/>}
            <div className={classes.wrapper}>
                <div className={classes.wrapper_text}>
                    <div className={classes.title}>
                        Confirmation of email
                    </div>
                    <div className={classes.title}>
                        ... Wait
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmail;
