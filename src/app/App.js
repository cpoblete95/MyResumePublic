import React from 'react';
import styles from './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';

const App = () => {
    // setTimeout(function(){ setLoading(false) }, 3000);
    return (
        <div className={styles.App}>
            <Router>
                <Navbar />
                <Main />
            </Router>
        </div>
    );
};

export default App;
