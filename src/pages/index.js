// React
import React from 'react';
import { Link } from 'react-router-dom';

// Surfr Components
import Box from '../components/surfrBox';
import Emoji from '../components/surfrEmoji';

function Index() {
    return (
        <div className="App">
          <header className="App-header">
            <Box>
                <p className="surfr-h1">
                    Surfr
                </p>
                <Emoji content="\u1F3C4"></Emoji>
                {/* <span role="img" aria-label="surfr-emoji" className="surfr-emoji"></span> */}
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