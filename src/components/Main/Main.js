import React from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './Main.css'

import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

/**
 * This will take care of all the routing
 * will display the main content component in the application
 */

 const Main = () => {
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