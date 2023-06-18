import React from 'react';
import leftArrow from '../../assets/elements/left-arrow-curved.png'
import rightArrow from '../../assets/elements/right-arrow-curved.png'
import classes from './Process.module.scss'
import {ReactComponent as Plus} from '../../assets/icons/plus-circle.svg'

const Process = () => {
    return (
        <div className={classes.process}>
            <div className={classes.process__header}>Your process</div>
            <div className={classes.process__subheader}>Look at your next steps to get a special case</div>
            <div className={classes.process__cards}>
                <img className={classes.process__card_arrow_left} src={leftArrow} alt="arrow" />
                <div className={`${classes.process__card} ${classes.first}`}>
                    <div className={classes.process__card_number}>1</div>
                    <div className={classes.process__card_title}>Add Network</div>
                    <div className={classes.process__card_description}>Add Polygon<Plus className={classes.icon_plus} /></div>
                </div>
                <img className={classes.process__card_arrow_right} src={rightArrow} alt="arrow" />
                <div className={`${classes.process__card} ${classes.second}`}>
                    <div className={classes.process__card_number}>2</div>
                    <div className={classes.process__card_title}>Add Token</div>
                    <div className={classes.process__card_description}>Add Polygon USDT <Plus className={classes.icon__plus} /></div>
                    <div className={classes.process__card_description}>Add ERC-20 USDT <Plus className={classes.icon__plus} /></div>
                </div>
                <div className={`${classes.process__card} ${classes.third}`}>
                    <div className={classes.process__card_number}>3</div>
                    <div className={classes.process__card_title}>Buy Now</div>
                    <div className={classes.process__card_description}>And get your box with a few clicks</div>
                </div>
            </div>
        </div>

    );
};

export default Process;
