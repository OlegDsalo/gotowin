import React from 'react';
import Button from "../Button/Button";
import classes from './Card.module.scss'
import {ReactComponent as UsdtIcon} from "../../assets/coins/usdt.svg"

const Card = ({label, title, icon, coin,onClick}) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__header}>
                <div className={classes.card__label}>{label}</div>
                <div className={classes.card__title}>{title}</div>
            </div>
            <div className={classes.card__content}>
                <div className={classes.card__content_title}>GENESIS MYSTERY BOX</div>
                <div className={classes.card__content_box}>
                    <div className={classes.card__content_box_label}>Value</div>
                    <div className={classes.card__content_box_value}>500 - 25,000 USDT</div>
                </div>
                <div className={classes.card__content_selector}><UsdtIcon className={classes.card__icon_usdt}/>USDT</div>
                <div className={classes.card__content_actions}>
                    <img className={classes.card__content_icon} src={icon} alt=""/>
                    <div className={classes.card__content_actions_name}>{coin}</div>
                    <Button size='small' onClick={onClick}>Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
