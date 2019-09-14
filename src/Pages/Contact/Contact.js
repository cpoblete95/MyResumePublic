import React, {useEffect} from 'react';
import styles from './Contact.css';

import Avatar from '../../Images/Avatar.png';

const Contact = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    return(
        <div className = {styles.Contact}>
            <div className = {styles.Modal}>
                <div className = {styles.Dialog}>
                    <div className = {styles.LeftContent}>
                        <h1>Christopher Poblete</h1>
                        <img className = {styles.ContactAvatar} src = {Avatar}></img>
                        <p>Dynamic Software Engineer with 2+ years of experience. Skilled at developing turnkey, testable and efficient code. Implemented Jasmine unit test cases for a UnitedHealth Group project that covers 97% AngularJS code that helps prevent future issues. A conscientious fast learner who can easily adapt to changing business requirements.</p>
                    </div>
                    <div className = {styles.RightContent}>
                        Right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;