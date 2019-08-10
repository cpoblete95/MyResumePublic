import React from 'react';
import styles from './App.css';

import Navbar from '../components/Navbar/Navbar';

const App = () => {
    return(
        <div className = {styles.App}>
            <Navbar/>
            Hello world!
        </div>
    )
}

export default App;