import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";

import App from './app/app';

//import fontawesome to whole project
import './FontAwesome/FontAwesome';

//ReactDom.render (what do i want dto render, and where i want to render)
ReactDOM.render(<App/>,document.getElementById("app"));