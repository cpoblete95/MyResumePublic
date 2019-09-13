import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './Main.css'

import AboutMe from '../../Pages/AboutMe/AboutMe';
import Contact from '../../Pages/Contact/Contact';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Projects from '../../Pages/Projects/Projects';
import Resume from '../../Pages/Resume/Resume';

/**
 * This will take care of all the routing
 * will display the main content component in the application
 */

 const Main = () => {
    useEffect(() => {
        console.log("Main RENDERING!")
    },[])
     return(
         <div className = {styles.Main}>
             <Switch>
                <Route exact strict path = "/" component = {LandingPage}/>
                <Route exact strict path = "/contact" component = {Contact}/>
                <Route exact strict path = "/projects" component = {Projects}/>
                <Route exact strict path = "/aboutMe" component = {AboutMe}/>
                <Route exact strict path = "/resume" component = {Resume}/>
            </Switch>
         </div>
            
     )
 }

export default Main;