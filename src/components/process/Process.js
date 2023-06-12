import React from 'react';
import leftArrow from '../../assets/elements/left-arrow-curved.png'
import rightArrow from '../../assets/elements/right-arrow-curved.png'
import './Process.scss'
import {ReactComponent as Plus} from '../../assets/icons/plus-circle.svg'

const Process = () => {
    return (
        <div className='process'>
            <div className='process-header'>Your process</div>
            <div className='process-subheader'>Look at your next steps to get a special case</div>
            <div className="process-cards">
                <img className="process-card-arrow-left" src={leftArrow} alt="arrow"/>
                <div className="process-card first">
                    <div className="process-card-number test">1</div>
                    <div className="process-card-title">Add Network</div>
                    <div className="process-card-description">Add Polygon<Plus className='icon-plus'/></div>
                </div>

                <img className="process-card-arrow-right" src={rightArrow} alt="arrow"/>
                <div className="process-card second">
                    <div className="process-card-number test">2</div>
                    <div className="process-card-title">Add Token</div>
                    <div className="process-card-description">Add Polygon USDT <Plus className='icon-plus'/></div>
                    <div className="process-card-description">Add ERC-20 USDT <Plus className='icon-plus'/></div>
                </div>
                <div className="process-card third">
                    <div className="process-card-number">3</div>
                    <div className="process-card-title">Buy Now</div>
                    <div className="process-card-description">And get your box with a few clicks</div>
                </div>
            </div>
        </div>
    );
};

export default Process;
