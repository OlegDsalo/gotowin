import React from 'react';
import Button from "../button/Button";
import twitter from "../../assets/icons/bxl-twitter.svg";
import facebook from "../../assets/icons/bxl-facebook.svg";
import linkedin from "../../assets/icons/bxl-linkedin.svg";
import './Hero.scss'

const Hero = () => {
    return (
        <div className='container home-bg'>
            <div className="content">
                <div>
                    <h1 className='content-header'>discover and win</h1>
                    <h3 className='content-subheader'>Win cryptocurrency in just a few clicks with us</h3>
                    <Button size='xl'>See More</Button>
                </div>
                <div className="content-social">
                    <div className='content-social-box'><img className='content-social-icon' src={twitter} alt=""/>
                    </div>
                    <div className='content-social-box'><img className='content-social-icon' src={facebook} alt=""/>
                    </div>
                    <div className='content-social-box'><img className='content-social-icon' src={linkedin} alt=""/>
                    </div>
                </div>
            </div>
            <div className='featured'>
                <h1 className='featured-title'>featured on</h1>
                <div className='featured-list'>
                    <p className='featured-item'>Binance</p>
                    <p className='featured-item'>Bitcoin</p>
                    <p className='featured-item'>Shiba inu</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
