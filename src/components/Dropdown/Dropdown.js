import React, {useState, useEffect} from 'react';
import styles from './Dropdown.css';

import {Link} from 'react-router-dom';

import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';

const Dropdown = () => {
    const [showDropdownState, setShowDropDownState] = useState(false);

    let showDropdown = showDropdownState ? styles.showDropdown : "";

    const toggleDropdown = () => {
        setShowDropDownState(!showDropdownState);
    }
    return(
        <OutsideAlerter showing = {showDropdownState} setShowing = {setShowDropDownState}>
            <div id = "slide" className = {styles.DropdownButton} onClick = {toggleDropdown}>
                <div className = {styles.DropdownBars}>
                    <div></div>
                    <div></div>
                    <div></div>  
                </div>
                <div className = {`${styles.DropdownMenu} ${showDropdown}`}>
                    <Link to = "/">Home</Link>
                    <Link to = "/resume">Resume</Link>
                    <Link to = "/aboutMe">About Me</Link>
                    <Link to = "/projects">Projects</Link>
                    <Link to = "/contact">Contact</Link>
                </div>
            </div>
        </OutsideAlerter>

    )
}

export default Dropdown;