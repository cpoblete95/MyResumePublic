import React, { useEffect } from 'react';
import styles from './LandingPage.css';

import Avatar from '../../Images/Avatar.png';
import Intro from '../../Images/Intro.png';

import Banner from '../../components/Banner/Banner';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const LandingPage = () => {
    useEffect(() => {
    //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    }, []);

    return (
        <div className={styles.LandingPage}>
            <LoadingPage />
            <img className={styles.AvatarImg} src={Avatar} />
            <img className={styles.IntroImg} src={Intro} />
            <Banner />
            {/* <h1>I'm Christopher.</h1> */}
        </div>
    );
};

export default LandingPage;
