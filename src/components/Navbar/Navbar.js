import React, {useState, useEffect, useRef} from 'react';
import styles from './Navbar.css';

import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
    const [dropDownFocused, setDropdownFocused] = useState(false);

    let dropdownFocusedStyle = dropDownFocused ? styles.focused : "";

    const handleDropdownClick = (event) => {
        setDropdownFocused(!dropDownFocused);
        return;
    };

    const handlePortofolioClick = (event) => {
        window.location = "/";
        return;
    };

    return(
        <div className = {styles.Navbar}>
            <ul>
                <li onClick = {handleDropdownClick} className = {`${styles.NavbarDropdown} ${dropdownFocusedStyle}`}> 
                    <Dropdown 
                    dropDownFocused = {dropDownFocused} 
                    handleDropdownClick = {handleDropdownClick}
                    /> 
                </li>
                <li onClick = {handlePortofolioClick} className = {styles.NavbarTitle}><p>Christopher's Portfolio</p></li>
                <li><Link to = "/contact">Contact</Link></li>
                {/* <li><Link to = "/projects">Projects</Link></li> */}
                <li><Link to = "/aboutMe">About Me</Link></li>
                <li><Link to = "/resume">Resume</Link></li>
                <li><Link to = "/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;