import React from 'react';
import styles from './TextArea.css';

const TextArea = (props) => {
    return (
        <div className={styles.TextArea}>
            <label> {props.label} </label>
            <textarea {...props} />
        </div>
    );
};

export default TextArea;
