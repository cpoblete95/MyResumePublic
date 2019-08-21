import React from 'react';

import styles from './LandingPage.css';
import Avatar from '../../Images/Avatar.png';

const LandingPage = () => {
    return(
        <div className = {styles.LandingPage}>
            <img className = {styles.AvatarImg} src = {Avatar}></img>
        </div>
    )
}

export default LandingPage;