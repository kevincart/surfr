// React
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

// Component imports
import Box from './components/SurfrBox';
import Card from './components/SurfrCard';
import Emoji from './components/SurfrEmoji';
import Nav from './components/SurfrNav';
import SVG from './components/SurfrSVG';

// Style imports
import './surfr.css';
import './_reset.scss';

ReactDOM.render(
    <BrowserRouter basename="/surfr">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default { Card, Box, Emoji, Nav, SVG };