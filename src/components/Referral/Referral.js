import React, {useState} from 'react';
import cardEthereum from "../../assets/coins/cardCoinEthereum.png";
import cardBitcoin from "../../assets/coins/cardCoinBitcoin.png";
import classes from './Referral.module.scss'
import {ReactComponent as Copy} from "../../assets/icons/copy.svg";
import clipboardCopy from "../../utils/clipboard";


const Referral = ({referralEarnedBalance = 0, referralCount = 0, refCode = ''}) => {
    const [notification, setNotificaiton] = useState(false);
    const basesUrl = 'https://gotowin.co/register/';

    const copyRefCode = () => {
        clipboardCopy(basesUrl + refCode)
        setNotificaiton(true)
        setTimeout(() => {
            setNotificaiton(false);
        }, 3000)
    }
    return (
        <div className={classes.referral}>
            <div className={classes.title}>Referrals</div>
            <div className={classes.referral__cards}>
                <div className={`${classes.referral__card} ${classes.referral__card_link}`}>
                    <div className={classes.referral__card_link_text}>Refer and Earn</div>
                    <div className={classes.referral__card_link_title}>Refer you Friend</div>
                    <div className={classes.referral__card_link_title}>And Win</div>
                    <div className={classes.referral__card_link_button} onClick={copyRefCode}>
                        Refer Now<Copy/>
                        {notification &&
                        <div className={`${classes.referral__card_link_tooltip} ${classes.tooltipContent}`}>
                            Copied
                        </div>}
                    </div>
                    <img className={classes.referral__card_img} src={cardEthereum} alt=""/>
                </div>
                <div className={`${classes.referral__card} ${classes.referral__card_info}`}>
                    <div className={classes.referral__card_info_title}>Referrals</div>
                    <div className={classes.referral__card_info_column}>
                        <div className={classes.referral__card_info_box}>
                            <div className={classes.referral__card_info_label}>Invited:</div>
                            <div className={classes.referral__card_info_value}>{referralCount}</div>
                        </div>
                        <div className={classes.referral__card_info_box}>
                            <div className={classes.referral__card_info_label}>Earned:</div>
                            <div className={classes.referral__card_info_value}>{referralEarnedBalance}</div>
                        </div>
                    </div>
                    <img className={classes.referral__card_img} src={cardBitcoin} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Referral;
