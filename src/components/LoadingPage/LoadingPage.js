import React, { useState } from 'react';
import styles from './LoadingPage.css';

const LoadingPage = (props) => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showMain, setShowMain] = useState(false);

    //when not loading have a small delay to show transtion of "welcome"
    // if(!props.loading)
    // {
    //     setTimeout(() => { setShowWelcome(true) }, 100);
    // }
    setTimeout(() => {
        setShowWelcome(true);
    }, 100);

    //after showing welcome wait three seconds then do another transition
    if (showWelcome) {
        setTimeout(() => {
            setShowMain(true);
        }, 2000);
    }

    return (
        <div
            className={`${styles.LoadingPage} ${
                showMain ? styles.MainTransition : ''
            }`}
        >
            <div className={styles.Spinner}>
                {/* {props.loading ?
                    <div className="spinner-border" style = {{width: "6em", height: "6em"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                     : */}
                <div
                    className={`${styles.NotLoading} ${
                        showWelcome ? styles.Transition : ''
                    }`}
                >
          Welcome!
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
