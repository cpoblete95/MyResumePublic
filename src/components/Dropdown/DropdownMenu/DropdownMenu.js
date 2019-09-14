import React, {useState, useEffect, useRef} from 'react';
import styles from './DropdownMenu.css';

import {Link} from 'react-router-dom';

const DropdownMenu = (props) => {
    const [showTransition, setShowTransition] = useState(false);

    let showMenu = props.dropDownFocused ? true : false;

    const dropdownRef = useRef();

    const handleOutsideClick  = (event) => {
        //if clicked inside of menu or clicked dropdown button
        if (showMenu && 
            event && 
            event.target.id !== "" &&
            (!event.target.id.includes("dropdownButton") || dropdownRef.current.contains(event.target))) {
            return;
        }else{
            console.log("dropdown clicked")
            props.handleClick();
            return;
        }
    }

    useEffect(() => {
        // add when mounted and showDropdownState is true
        if(showMenu){
            console.log("MOUNTING DROPDOWN LISTNER");
            document.addEventListener("mousedown", handleOutsideClick);
            // return function to be called when unmounted
            return () => {
                console.log("UNMOUNTING DROPDOWN LISTNER");
            document.removeEventListener("mousedown", handleOutsideClick);
            };
        }
      }, [showMenu]);

    // ref = {showDropdown ? props.dropdownRef : null} 
    return(
        <div ref = {showMenu ? dropdownRef : null} className = {`${styles.DropdownMenu} ${showMenu ? styles.show : ""}`}>
            <div className = {styles.DropdownLinks}>
            <Link id = "dropdownButtonLink1" to = "/">Home</Link>
            <Link id = "dropdownButtonLink2" to = "/resume">Resume</Link>
            <Link id = "dropdownButtonLink3" to = "/aboutMe">About Me</Link>
            {/* <Link id = "dropdownButtonLink4" to = "/projects">Projects</Link> */}
            <Link id = "dropdownButtonLink5" to = "/contact">Contact</Link>
            </div>

        </div>
    )
}

export default DropdownMenu;