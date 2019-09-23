import React, {useEffect} from 'react';
import styles from './Resume.css';

import Avatar from '../../Images/Avatar.png';

const Resume = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    
    return(
        <div className = {styles.Resume}>
            {/* LEFT CONTENT */}
            <div className = {styles.LeftContent}>
                <img className = {styles.AvatarImg} src = {Avatar}></img>
                <h1>Christopher Poblete</h1>
                <h3>Software Engineer</h3>
                <hr/>
                <p>
                Dynamic Software Engineer with 2+ years of experience. Skilled at developing turnkey, testable and efficient code. Implemented Jasmine unit test cases for a UnitedHealth Group project that covers 97% AngularJS code that helps prevent future issues. A conscientious fast learner who can easily adapt to changing business requirements.

                </p>
            </div>
            <div className = {styles.RightContent}>
                <div className = {styles.RightContentBox}>
                    <h1>Experience</h1>
                </div>
            </div>
        </div>
    )
}

export default Resume;