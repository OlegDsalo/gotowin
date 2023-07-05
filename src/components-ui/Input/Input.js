import React from 'react';
import './Input.scss';

const Input = ({placeholder,type='text', value, className='', onChange, args, error=""}) => {
    return (
        <div className="input-container ">
            <input className={`input ${className}`}
                   type={type}
                   placeholder={placeholder}
                   // value={value}
                   // onChange={onChange}
                   {...args}
            />
            <div className='input-error'>{error}</div>
        </div>
    );
};

export default Input;
