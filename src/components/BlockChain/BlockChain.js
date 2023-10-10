import React from 'react';
import binanceCoin from "../../assets/coins/BinanceCoin2.png";
import Input from "../../components-ui/Input/Input";
import Button from "../../components-ui/Button/Button";
import classes from './BlockChain.module.scss'
import binance from '../../assets/coins/binanceUser.png'
import bitcoin from '../../assets/coins/bitcoinUser.png'
import lite from '../../assets/coins/liteUser.png'
import stellar from '../../assets/coins/stellarUser.png'
import ethereum from '../../assets/coins/ethereumUser.png'
import cardano from '../../assets/coins/cardanoUser.png'
import accountService from "../../service/AccountService";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    amount: yup.number().min(300, "Amount must be at least 300"),
})
const BlockChain = ({walletAddress}) => {

    const {
        watch,
        register,
        formState: {errors}
    } = useForm({
        defaultValues: {amount:300},
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const amount = watch('amount');

    const multiply = 25;
    const resultValue = Math.max( amount * multiply,0).toFixed(0)


    const buyCoins = async () => {
        let result = await accountService.buyCoins(Number(amount));
        window.location.replace(result.paymentUrl);
    }

    return (
        <div className={classes.purchase}>
            <img src={binance} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_binance}`}/>
            <img src={bitcoin} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_bitcoin}`}/>
            <img src={lite} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_lite}`}/>
            <img src={stellar} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_stellar}`}/>
            <img src={ethereum} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_ethereum}`}/>
            <img src={cardano} alt="" className={`${classes.purchase__coin} ${classes.purchase__coin_cardano}`}/>
            <div className={classes.title}>Buy & Win</div>
            <div className={classes.purchase__subtitle}>Exchange blockchain in a few clicks</div>
            <div className={classes.purchase__calculator_bg}>
                <div className={classes.purchase__calculator}>
                    <div className={classes.purchase__title}>Blockchain</div>
                    <div className={classes.purchase__button_icon}><img src={binanceCoin} alt=""/>BSC</div>
                    <hr className={classes.purchase__line}/>
                    <div className={classes.purchase__label}>Enter quantity</div>
                    <div className={classes.purchase__inputs}>
                        <div className={classes.purchase__test}>
                            <Input placeholder='Enter value' type='number' color='transparent' className={classes.purchase__input}  defaultValue="300" //
                                   error={errors?.amount?.message}  args={{...register("amount")}}/>
                        </div>
                        <div className={classes.purchase__input_result}>
                            {resultValue} GOW
                        </div>
                    </div>
                    <hr className={classes.purchase__line} style={{marginTop: 26}}/>
                    <div className={classes.purchase__button}>
                        <Button onClick={buyCoins} disabled={!walletAddress}>Buy</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockChain;
