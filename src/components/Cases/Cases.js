import React from 'react';
import Card from "../../components-ui/Card/Card";
import bitcoinCoin from "../../assets/coins/Bitcoin.png";
import bnbCoin from "../../assets/coins/Binance.png";
import shibaInuCoin from "../../assets/coins/SHIBAINU.png";
import classes from  './Cases.module.scss'

const Cases = () => {
    return (
        <div className={classes.cases}>
            <div className={classes.title}>My Cases</div>
            <div className={classes.cases_cards}>
                <Card label='Limited' title='GOLDCASE' coin='Bitcoin' icon={bitcoinCoin}></Card>
                <Card label='Premium' title='SILVER CASE' coin='BNB' icon={bnbCoin}></Card>
                <Card label='Most popular' title='BRONZE CASE' coin='Shiba inu' icon={shibaInuCoin}></Card>
            </div>
        </div>
    );
};

export default Cases;
