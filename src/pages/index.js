// React
import React from 'react';

// Surfr Components
import Box from '../components/surfrBox';
import { Link } from 'react-router-dom';

function Index() {
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
            <Link to="/about">Find out more...</Link>
          </header>
        </div>
    );
}

export default Index;