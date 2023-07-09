import React from 'react';
import './Input.scss';

//color transparent | default
const Input = ({
                   placeholder = '',
                   type = 'text',
                   className = '',
                   color = 'default',
                   error = "",
                   prefix,
                   value,
                   onChange,
                   args,

               }) => {
    return (<>
        <div className={`input-container ${color} ${error ? 'error' : ''}`}>
                <input className={`input ${className} ${color}`}
                       type={type}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       {...args}
                >{prefix && <span>{prefix}</span>}</input>
            </div>
            {error && <div className='input-error'>{error}</div>}
        </>

    );
};

export default Input;
