import React, { useEffect } from 'react';
import styles from './Dropdown.css';

import DropdownMenu from './DropdownMenu/DropdownMenu';

const Dropdown = (props) => {
    useEffect(() => {
        console.log('MOUNTING DROPDOWN Button');

        return () => {
            console.log('UNMOUNTING DROPDOWN Button');
        };
    });
    return (
        <div
            id="dropDownBarBox"
            className={styles.DropdownButton}
            onClick={props.handleDropdownClick}
        >
            <div id="dropDownBarContainer" className={styles.DropdownBars}>
                <div id="dropdownBar1" />
                <div id="dropdownBar2" />
                <div id="dropdownBar3" />
            </div>
            {/* dropdownMenu */}
            <DropdownMenu
                handleClick={props.handleDropdownClick}
                dropDownFocused={props.dropDownFocused}
            />
        </div>
    );
};

export default Dropdown;
