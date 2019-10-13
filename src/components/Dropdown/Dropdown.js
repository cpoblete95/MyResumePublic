import React, {useState, useEffect} from 'react';
import styles from './Dropdown.css';

import DropdownMenu from './DropdownMenu/DropdownMenu';

const Dropdown = (props) => {    
    useEffect(() => {
        console.log("MOUNTING DROPDOWN Button");

        return () => {
            console.log("UNMOUNTING DROPDOWN Button")
        }
    })

    //will either close or open dropdown menu
    const handleClick = () => {
        props.handleDropdownClick()
    }
    return(
        <div id = "dropDownBarBox" className = {styles.DropdownButton} onClick = {props.handleDropdownClick}>
            <div id = "dropDownBarContainer" className = {styles.DropdownBars}>
                <div id = "dropdownBar1"></div>
                <div id = "dropdownBar2"></div>
                <div id = "dropdownBar3"></div>  
            </div>
            {/* dropdownMenu */}
            <DropdownMenu 
            handleClick = {props.handleDropdownClick} 
            dropDownFocused = {props.dropDownFocused}
            />
        </div>
    )
}

export default Dropdown;