import React, {useState} from 'react';
import classes from './Wallet.module.scss'
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import Sparkle from "../../assets/elements/sparkleSmall.png";
import Input from "../../components-ui/Input/Input";

const Wallet = ({walletBalance = 0, walletAddress}) => {
    const [edit, setEdit] = useState(false)
    const changeToEditMode = () => {
        setEdit(true);
    }
    return (
        <div className={classes.wallet}>
            <img className={classes.title__icon} src={Sparkle} alt=""/>
            <div className={classes.title}>My wallet</div>
            <div className={classes.wallet__wrapper}>
                <div className={classes.wallet__card}>
                    <div className={classes.wallet__row}>
                        <div className={classes.wallet__title}>GOTOWIN</div>
                        <div className={classes.wallet__box}></div>
                    </div>
                    <div className={classes.wallet__label}>Balance</div>
                    <div className={classes.wallet__balance}>${walletBalance}</div>
                    {!edit ?
                        <div className={classes.wallet__action}>

                            <div className={classes.wallet__action_text}>Paste your wallet address</div>
                        </div>
                        :
                        <Input color='transparent'/>
                    }
                </div>
                <div className={classes.wallet__box} onClick={changeToEditMode}>
                    <Plus/>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
