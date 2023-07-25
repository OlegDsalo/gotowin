import React, {useState} from 'react';
import Footer from "../../components-ui/Footer/Footer";
import Header from "../../components-ui/Header/Header";
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";
import './User.scss'
import Referral from "../../components/Referral/Referral";
import Wallet from "../../components/Wallet/Wallet";
import Cases from "../../components/Cases/Cases";
import BlockChain from "../../components/BlockChain/BlockChain";
import accountServiceInstance from "../../service/AccountService";
import useAsyncEffect from "../../utils/AsyncEffect";
import {useNavigate} from "react-router-dom";

const User = () => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate();
    const navigateToLogin = () => navigate('/login')

    const fetchUser = async () => {
        const response = await accountServiceInstance.getUser()
        setUser(response);
    }

    useAsyncEffect(async () => {
        if (localStorage.getItem('token') === null) {
            navigateToLogin()
        }
        await fetchUser()
    }, []);


    return (user ?
            <div className='user-container'>
                <Header user={user}/>
                <div className='user user__bg'>
                    <div className='user__border'>
                        <div className='user_box'>
                            <div className='user-back'><ChevronLeft/></div>
                            <img className='user-avatar'
                                 src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt=""/>
                            <div className='user-name'>{user.fullName}</div>
                            <div className='user-text'>Lorem</div>
                        </div>
                    </div>
                </div>
                <Wallet user={user} fetchUser={fetchUser}/>
                <Cases/>
                <Referral referralEarnedBalance={user.referralEarnedBalance} refCode={user.referralCode}
                          invited={user.invited}/>
                <BlockChain/>
                <Footer/>
            </div> : null
    );
};

export default User;
