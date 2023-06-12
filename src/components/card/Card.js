import React from 'react';
import Button from "../button/Button";
import './Card.scss'
import {ReactComponent as UsdtIcon} from "../../assets/coins/usdt.svg"

const Card = ({label, title, icon, coin,onClick}) => {
    return (
        <div className='card'>
            <div className="card-header">
                <div className='card-label'>{label}</div>
                <div className='card-title'>{title}</div>
            </div>
            <div className="card-content">
                <div className='card-content-title'>GENESIS MYSTERY BOX</div>
                <div className="card-content-box">
                    <div className="card-content-box-label">Value</div>
                    <div className="card-content-box-value">500 - 25,000 USDT</div>
                </div>
                <div className='card-content-selector'><UsdtIcon className='card-icon-usdt'/>USDT</div>
                <div className="card-content-actions">
                    <img className='card-content-icon' src={icon} alt=""/>
                    <div className='card-content-actions-name'>{coin}</div>
                    <Button size='small' onClick={onClick}>Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
