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

const User = () => {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //         async function fetchUser() {
    //             await accountServiceInstance.getUser()
    //                 .then(r => {
    //                     setUser(r.data);
    //                 })
    //         }
    //
    //         fetchUser()
    //         console.log(user)
    //     }, []
    // )
    useAsyncEffect(async () => {
        async function fetchUser() {
            await accountServiceInstance.getUser()
                .then(r => {
                    setUser(r.data);
                })
        }
        fetchUser()
        console.log(user)
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
                <Wallet walletBalance={user.walletBalance} walletAddress={user.walletAddress}/>
                <Cases/>
                <Referral referralEarnedBalance={user.referralEarnedBalance} refCode={user.referralCode}
                          invited={user.invited}/>
                <BlockChain/>
                <Footer/>
            </div> : null
    );
};

export default User;
