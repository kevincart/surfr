// Component imports
import Box from './components/surfrBox';
import Card from './components/surfrCard';
import Emoji from './components/surfrEmoji';
import Nav from './components/surfrNav';
import SVG from './components/surfrSVG';

// React imports
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Internal imports
import App from './App';

// Style imports
import './surfr.css';
import './_reset.scss';

ReactDOM.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
 );

export default { Card, Box, Emoji, Nav, SVG };