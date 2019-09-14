// React
import React from 'react';

// Surfr Components
import Box from './components/surfrBox';
import SiteLink from './components/surfrLink';

// Styles
import './App.css';

function Homepage() {
    return (
        <div className="App">
          <header className="App-header">
            <Box>
                <p>
                    Surfr
                </p>
                <span role="img" aria-label="surfr-emoji" className="surfr-emoji"></span>
            </Box>
            <SiteLink route="homepage">Find out more...</SiteLink>
          </header>
        </div>
    );
}

export default App;
