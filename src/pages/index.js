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
                    <p>
                        <Emoji content="&#127940;"></Emoji>
                    </p>
                    <p>
                        A cool open-source react design system.
                    </p>
                </Box>
                <Link to="/about" className="surfr-link">Find out more...</Link>
            </header>
        </div>
    );
}

export default Index;