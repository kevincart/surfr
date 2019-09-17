// React
import React from 'react';

// Surfr Components
import Box from '../components/surfrBox';
import Nav from '../components/surfrNav';

function About() {
    return (
        <div className="App">
            <header className="App-header">
            <Nav></Nav>
            </header>
            <Box>
                <article className="App-article">
                    Surfr is a mobile-first design system made in React.
                    You should feel free to fork it and use it 
                    as a starter project for learning about design systems.
                </article>
            </Box>
        </div>
    );
}

export default About;