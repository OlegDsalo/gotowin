import React from 'react';
import Card from "../card/Card";
import sparcle from "../../assets/elements/Sparkle.png";
import bitcoinCoin from "../../assets/coins/Bitcoin.png";
import bnbCoin from "../../assets/coins/Binance.png";
import shibaInuCoin from "../../assets/coins/SHIBAINU.png";
import avatar1 from "../../assets/avatar/avatar1.png";
import avatar2 from "../../assets/avatar/avatar2.png";
import avatar3 from "../../assets/avatar/avatar3.png";
import avatar4 from "../../assets/avatar/avatar4.png";
import avatar5 from "../../assets/avatar/avatar5.png";
import './Pricing.scss'

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
        <div className='pricing'>
            <div className="winer-list">
                {avatarObj.map((it,id) =>
                    <div className="winer-list-item" key={it.name}>
                        <img className='winer-item-avatar' src={it.img} alt=""/>
                        <p className="winer-item-name">{it.name}</p>
                        <div className="winer-item-money">
                            <div className='winer-item-label'>Value:</div>
                            <div className='winer-item-value'>{it.value} USDT</div>
                        </div>
                    </div>
                )}
            </div>
            <div className='pricing-headline'>
                <div className="pricing-header">What’s new ?
                    <img className='pricing-header-icon' src={sparcle} alt='#'></img>
                </div>
                <div className="pricing-subheader">Receive and win cases with unique offers at an affordable price
                </div>
            </div>
            <div className='pricing-bg'>
                <div className="pricing-cards">
                    <Card label='Limited' title='GOLDCASE' coin='Bitcoin' icon={bitcoinCoin}></Card>
                    <Card label='Premium' title='SILVER CASE' coin='BNB' icon={bnbCoin}></Card>
                    <Card label='Most popular' title='BRONZE CASE' coin='Shiba inu' icon={shibaInuCoin}></Card>
                </div>
            </div>

        </div>

    );
};

export default Pricing;
