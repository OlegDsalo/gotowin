import React from 'react';
import Button from "../../components-ui/Button/Button";
import twitter from "../../assets/icons/bxl-twitter.svg";
import facebook from "../../assets/icons/bxl-facebook.svg";
import linkedin from "../../assets/icons/bxl-linkedin.svg";
import classes from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div>
                    <h1 className={classes.content__header}>discover and win</h1>
                    <h3 className={classes.content__subheader}>Win cryptocurrency in just a few clicks with us</h3>
                    <Button size='xl'>See More</Button>
                </div>
                <div className={classes.content__social}>
                    <a href="https://twitter.com/GoToWin_">
                        <div className={classes.content__social_box}>
                            <img className={classes.content__social_icon} src={twitter} alt=""/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/go-to-win-350380268/">
                        <div className={classes.content__social_box}>
                            <img className={classes.content__social_icon} src={linkedin} alt=""/>
                        </div>
                    </a>

                </div>
            </div>
            <div className={classes.featured}>
                <h1 className={classes.featured__title}>featured on</h1>
                <div className={classes.featured__list}>
                    <p className={classes.featured__item}>Binance</p>
                    <p className={classes.featured__item}>Bitcoin</p>
                    <p className={classes.featured__item}>Shiba inu</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
