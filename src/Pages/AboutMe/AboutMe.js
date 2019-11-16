import React, { useEffect } from 'react';
import styles from './AboutMe.css';
import Personal from '../../Images/Personal.jpg';
import { Link } from 'react-router-dom';

const aboutMeText = {
    header: 'About me',
    subHeader: "I'm a Software Developer from Point Pleasant Boro, New Jersey.",
    aboutMe:
    'I enjoy taking complex problems, and breaking them down into modularized tasks. I also appreciate the logic and ' +
    'structure of coding and always aim to create simple and efficient code, whether it be Java,' +
    ' Javascript, HTML or CSS.'
};

const AboutMe = () => {
    useEffect(() => {
    //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    }, []);

    return (
        <div className={styles.AboutMe}>
            <div className={styles.AboutMeContainer}>
                <img src={Personal} />
                <div className={styles.description}>
                    <h1>{aboutMeText.header}</h1>
                    <p>{aboutMeText.subHeader}</p>
                    <p>{aboutMeText.aboutMe}</p>
                    <p>
            When im not clacking away at a keyboard coding or working you'll
            either find me in the gym, shooting hoops or spending time with my
            family. If you would like to learn more about me feel free to view
            my <Link to="/resume">Resume</Link> or{' '}
                        <Link to="/contact">contact me</Link>!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
