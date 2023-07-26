import React, {useState} from 'react';
import classes from './Wallet.module.scss'
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import Sparkle from "../../assets/elements/sparkleSmall.png";
import Input from "../../components-ui/Input/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import accountService from "../../service/AccountService";

const schema = yup.object({
    walletAddress: yup.string().required('Wallet Address is required').min(16, "Wallet Address must be at least 16 characters").max(16, "Wallet Address can't exceed 16 characters"),
});


const Wallet = ({user, fetchUser}) => {
    const transformString = (input) => {
        const digitsOnly = input.replace(/\D/g, "");
        const lastFourDigits = digitsOnly.slice(-4);
        const transformedString = "**** **** **** " + lastFourDigits;
        return transformedString;
    };

    const [edit, setEdit] = useState(false);

    const changeToEditMode = () => {
        setEdit(true);
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
        let userObj = {...user, ...data}
        accountService.addWalletAddress(userObj).then(r => {
                setEdit(false);
                fetchUser()
            }
        )
    }
    const WalletAddress = () => {
        return (
            user.walletAddress &&
                <div className={classes.wallet__address}>
                    {transformString(user.walletAddress)}
                </div>
        )
    }
    const EditWalletAddress = () => {
        return (
            edit && !user.walletAddress
            && <Input color='transparent' error={errors?.walletAddress?.message}
                      args={{...register("walletAddress")}}/>
        )
    }
    const PasteYourWallet = () => {
        return (
            !edit && !user.walletAddress &&
            <div className={classes.wallet__action}>
                <div className={classes.wallet__action_text}>Paste your wallet address</div>
            </div>

        )
    }
    const PlusIcon = () => {
        return (
            !edit && !user.walletAddress &&
            <div className={classes.wallet__plus} onClick={changeToEditMode}>
                <Plus/>
            </div>
        )
    }
    const AddAddressButton = () => {
        return (
            edit && !user.walletAddress &&
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className={classes.wallet__confirm} type='submit'>Add address</button>
            </form>
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
                    <div className={classes.wallet__balance}>${user.walletBalance}</div>
                    <WalletAddress/>
                    <PasteYourWallet/>
                    <EditWalletAddress/>
                </div>
                <PlusIcon/>
                <AddAddressButton/>
            </div>
        </div>
    );
};

export default Wallet;
