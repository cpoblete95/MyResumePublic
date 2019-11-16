import React from 'react';
import style from './Input.css';

import MaskedInput from 'react-text-mask';

const Input = (props) => {
    let label = props.label;
    return (
        <div className={style.Input}>
            <label> {props.label} </label>
            {/* if mask then use mask input */}
            {!props.Mask ? (
                <input {...props} />
            ) : (
                <MaskedInput guide={false} {...props} />
            )}
        </div>
    );
};

export default Input;
