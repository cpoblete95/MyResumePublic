import React ,{useEffect} from 'react';
import styles from './LandingPage.css';

import Avatar from '../../Images/Avatar.png';
import Intro from '../../Images/Intro.png';

import Banner from '../../components/Banner/Banner';


const LandingPage = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    
    return(
        <div className = {styles.LandingPage}>
            <img className = {styles.AvatarImg} src = {Avatar}></img>
            <img className = {styles.IntroImg} src = {Intro}></img>
            <Banner/>
            {/* <h1>I'm Christopher.</h1> */}

        </div>
    )
}

export default LandingPage;