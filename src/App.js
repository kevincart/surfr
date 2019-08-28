// React
import React from 'react';

// Surfr Components
import Box from './components/surfrBox';
import SiteLink from './components/surfrLink';

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <Box>
                <p className="surfr-h1">
                    Surfr
                </p>
                <span role="img" aria-label="surfr-emoji" className="surfr-emoji"></span>
                <p>
                  A cool open-source react design system.
                </p>
            </Box>
            <SiteLink route="homepage">Find out more...</SiteLink>
          </header>
        </div>
    );
}

export default App;
