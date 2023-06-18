import React from 'react';
import './Input.scss';

const Input = ({placeholder, value, className='', onChange, args}) => {
    return (
        <div className="input-container">
            <input className={`input ${className}`}
                   type="text"
                   placeholder={placeholder}
                   // value={value}
                   // onChange={onChange}
                   {...args}
            />
        </div>
    );
};

export default Input;
