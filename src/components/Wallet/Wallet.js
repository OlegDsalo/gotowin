import React, {useState} from 'react';
import classes from './Wallet.module.scss'
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {ReactComponent as Check} from "../../assets/icons/check.svg";
import Sparkle from "../../assets/elements/sparkleSmall.png";
import Input from "../../components-ui/Input/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import accountService from "../../service/AccountService";

const schema = yup.object({
    walletAddress: yup.string().required('Wallet Address is required').min(16, "Wallet Address must be at least 16 characters").max(16, "Wallet Address can't exceed 16 characters"),
});


const Wallet = ({walletBalance = 0, walletAddress}) => {
    const transformString = (input) => {
        const digitsOnly = input.replace(/\D/g, "");
        const lastFourDigits = digitsOnly.slice(-4);
        const transformedString = "**** **** **** " + lastFourDigits;
        return transformedString;
    };
    const string = '9999888811117777'
    const wallet = transformString(string)
    const [edit, setEdit] = useState(false)
    const changeToEditMode = () => {
        setEdit(true);
        console.log(wallet)
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data)
        accountService.addWalletAddress(data).then(r=>
            setEdit(false)
        )
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
                    {walletAddress && !edit? <div className={classes.wallet__address}>
                        {transformString(walletAddress)}
                    </div> : null}
                    {!edit && !walletBalance ?
                        <div className={classes.wallet__action}>
                            <div className={classes.wallet__action_text}>Paste your wallet address</div>
                        </div>
                        :
                        <Input color='transparent' error={errors?.walletAddress?.message}
                               args={{...register("walletAddress")}}/>
                    }
                </div>
                {!edit ?
                    <div className={classes.wallet__plus} onClick={changeToEditMode}>
                        <Plus/>
                    </div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button className={classes.wallet__confirm} type='submit'>Add address</button>
                    </form>
                }
            </div>
        </div>
    );
};

export default Wallet;
