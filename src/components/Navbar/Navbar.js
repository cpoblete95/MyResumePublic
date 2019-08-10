import React from 'react';
import styles from './Navbar.css';

import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
    return(
        <div className = {styles.Navbar}>
            <ul>
                <li className = {styles.NavbarDropdown}> <Dropdown/> </li>
                <li className = {styles.NavbarTitle}><p>TITLE</p></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#aboutMe">About Me</a></li>
                <li><a href="#home">Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar;