import React ,{useEffect} from 'react';

import styles from './LandingPage.css';
import Avatar from '../../Images/Avatar.png';

const LandingPage = () => {
    useEffect(() => {
        console.log("MOUNTINg Landing page");

        return () => {
            console.log("LandingPAge UNMOUNT")
        };
        
    },[])
    return(
        <div className = {styles.LandingPage}>
            <img className = {styles.AvatarImg} src = {Avatar}></img>
        </div>
    )
}

export default LandingPage;