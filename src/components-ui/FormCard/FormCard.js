import React from 'react';
import classes from './FormCard.module.scss'
import {ReactComponent as ChevronLeft} from "../../assets/icons/chevron-left.svg";


const FormCard = ({children}) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__back}><ChevronLeft/></div>
            {children}
        </div>
    );
};

export default FormCard;
