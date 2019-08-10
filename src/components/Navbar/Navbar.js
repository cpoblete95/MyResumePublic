import React from 'react';
import styles from './Navbar.css';

import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
    return(
        <div className = {styles.Navbar}>
            <ul>
                <li className = {styles.NavbarDropdown}> <Dropdown/> </li>
                <li className = {styles.NavbarTitle}><p>TITLE</p></li>
                <li><Link to = "/contact">Contact</Link></li>
                <li><Link to = "/projects">Projects</Link></li>
                <li><Link to = "/aboutMe">About Me</Link></li>
                <li><Link to = "/resume">Resume</Link></li>
                <li><Link to = "/">Home</Link></li>

            </ul>
        </div>
    )
}

export default Navbar;