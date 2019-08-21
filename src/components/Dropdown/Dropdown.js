import React, {useState} from 'react';
import styles from './Dropdown.css';

import {Link} from 'react-router-dom';

const Dropdown = () => {
    const [showDropdown, setShowDropDown] = useState(false);

    // const toggleDropdown = () => {
    //     setShowDropDown(!showDropdown);
    // }
    return(
        <div id = "slide" className = {styles.DropdownButton}>
            <div className = {styles.DropdownBars}>
                <div></div>
                <div></div>
                <div></div>  
            </div>
            {/* {showDropdown && */}
            <div className = {styles.DropdownMenu}>
                <Link to = "/">Home</Link>
                <Link to = "/resume">Resume</Link>
                <Link to = "/aboutMe">About Me</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/contact">Contact</Link>
            </div>
            {/* } */}
        </div>

    )
}

export default Dropdown;