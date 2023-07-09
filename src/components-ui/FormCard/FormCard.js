import React from 'react';
import classes from './FormCard.module.scss'

const FormCard = ({children, title, subtitle}) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__title}>{title}</div>
            <div className={classes.card__subtitle}>{subtitle}</div>
            {children}
        </div>
    );
};

export default FormCard;
