import React from 'react';
import './Button.scss'
// type == secondary, primary outlined
//sizde  Large small medium xl
const Button = ({
                    children,
                    type = 'primary',
                    size = 'large',
                    className='',
                    onClick,
                    click = "button",
                    disabled
                }) => {
    const buttonClassName = `button ${type} ${size} ${className}`
    return (
        <button disabled={disabled} onClick={onClick} className={buttonClassName} type={click}>
            {children}
        </button>
    );
};

export default Button;
