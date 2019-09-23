import React, {useEffect, useState} from 'react';
import styles from './App.css';
import {BrowserRouter as Router} from "react-router-dom"

import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import LoadingPage from '../components/LoadingPage/LoadingPage';


const App = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(function(){ setLoading(false) }, 3000);

    useEffect(() => {
        console.log("APP RENDERING!")
    })
    return(
        <div className = {styles.App}>
            {/* <LoadingPage loading = {loading}/> */}
            <Router>
                <Navbar/>
                <Main/>
            </Router>
            
        </div>
        
    )
}

export default App;