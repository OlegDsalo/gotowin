import React from 'react';
import Card from "../Card/Card";
import sparcle from "../../assets/elements/Sparkle.png";
import bitcoinCoin from "../../assets/coins/Bitcoin.png";
import bnbCoin from "../../assets/coins/Binance.png";
import shibaInuCoin from "../../assets/coins/SHIBAINU.png";
import avatar1 from "../../assets/avatar/avatar1.png";
import avatar2 from "../../assets/avatar/avatar2.png";
import avatar3 from "../../assets/avatar/avatar3.png";
import avatar4 from "../../assets/avatar/avatar4.png";
import avatar5 from "../../assets/avatar/avatar5.png";
import styles from './Pricing.module.scss'

export class Avatar {
    constructor(name, value, img) {
        this.name = name
        this.value = value
        this.img = img
    }
}

const avatarObj = [
    new Avatar('RENGA', '3,000', avatar1),
    new Avatar('Rumble Kong League', '4,500', avatar2),
    new Avatar('The Plague NFT', '3,000', avatar3),
    new Avatar('Thelight3', '2700', avatar4),
    new Avatar('sadads', '3,000', avatar5),

]

const Pricing = () => {
    return (
        <div className={styles.pricing}>
            <div className={styles.winer__list}>
                {avatarObj.map((it, id) =>
                    <div className={styles.winer__list__item} key={it.name}>
                        <img className={styles.winer__item__avatar} src={it.img} alt=""/>
                        <p className={styles.winer__item__name}>{it.name}</p>
                        <div className={styles.winer__item__money}>
                            <div className={styles.winer__item__label}>Value:</div>
                            <div className={styles.winer__item__value}>{it.value} USDT</div>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.pricing__headline}>
                <div className={styles.pricing__header}>What’s new ?
                    <img className={styles.pricing__header__icon} src={sparcle} alt='#'></img>
                </div>
                <div className={styles.pricing__subheader}>Receive and win cases with unique offers at an affordable price</div>
            </div>
            <div className={`${styles.pricing__bg} ${styles.pricing__wrapper}`}>
                <div className={styles.pricing__cards}>
                    <Card label='Limited' title='GOLDCASE' coin='Bitcoin' icon={bitcoinCoin}></Card>
                    <Card label='Premium' title='SILVER CASE' coin='BNB' icon={bnbCoin}></Card>
                    <Card label='Most popular' title='BRONZE CASE' coin='Shiba inu' icon={shibaInuCoin}></Card>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
