import React from 'react';

import Box from './components/surfrr-box';
import './App.css';

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <Box>
                <p>
                    Surfr
                </p>
                <span role="img" aria-label="surfr-emoji" className="surfr-emoji"></span>
            </Box>
          </header>
        </div>
    );
}

export default App;
