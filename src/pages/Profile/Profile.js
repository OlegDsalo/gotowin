import React, {useState} from 'react';
import Footer from "../../components-ui/Footer/Footer";
import Header from "../../components-ui/Header/Header";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import classes from './Profile.module.scss'
import Referral from "../../components/Referral/Referral";
import Wallet from "../../components/Wallet/Wallet";
import Cases from "../../components/Cases/Cases";
import BlockChain from "../../components/BlockChain/BlockChain";
import accountServiceInstance from "../../service/AccountService";
import useAsyncEffect from "../../utils/AsyncEffect";
import {useAppNavigation} from "../../hook/useAppNavigation";
import ErrorModal from "../../components-ui/ErrorModal/ErrorModal";
import PageTitle from "../../utils/pageTitle";

const Profile = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);
    const {navigateToLogin, navigateToHome} = useAppNavigation();

    const fetchUser = async () => {
        try {
            const response = await accountServiceInstance.getUser()
            setUser(response);
        } catch (e) {
            setError(e)
        }

    }
    const clearError = () => {
        localStorage.removeItem('token');
        setError(null)
        navigateToLogin()
    }

    useAsyncEffect(async () => {
        if (localStorage.getItem('token') === null) {
            navigateToLogin()
        }
        await fetchUser()
    }, []);


    return (
        <div className={classes.user_container}>
            <PageTitle title='Profile'></PageTitle>
            {error && <ErrorModal error={error} clearError={clearError}/>}
            {user &&
                <>
                    <Header user={user}/>
                    <div className={`${classes.user} ${classes.user__bg}`}>
                        <div className={classes.user__border}>
                            <div className={classes.user_box}>
                                <div className={classes.user_back}><ChevronLeft onClick={navigateToHome}/></div>
                                <img className={classes.user_avatar}
                                     src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""/>
                                <div className={classes.user_name}>{user.fullName}</div>
                                <div className={classes.user_text}>Lorem</div>

                            </div>
                        </div>
                    </div>
                    <Wallet user={user} fetchUser={fetchUser}/>
                    <Cases/>
                    <Referral referralEarnedBalance={user.referralEarnedBalance} refCode={user.referralCode}
                              referralCount={user.referralCount}/>
                    <BlockChain walletAddress={user.walletAddress}/>


                </>
            }
            <Footer/>
        </div>
    );
};

export default Profile;
