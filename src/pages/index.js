// React
import React from 'react';
import { Link } from 'react-router-dom';

// Surfr Components
import Box from '../components/surfrBox';
import SVG from '../components/surfrSVG';
import SurferManSVG from '../svg/surfing-man-openmoji.component'
import WaveOpenmoji from '../svg/wave-openmoji.component'

function Index() {
    return (
        <div>
            <header className="App-header"></header>
            <div className="App">
                <Box>
                    <p className="surfr-h1">
                        Surfr
                    </p>
                    <SVG>
                        <SurferManSVG></SurferManSVG>
                    </SVG>
                    <p>
                        A cool open-source react design system.
                    </p>
                </Box>
                <Link to="/about" className="surfr-link">Find out more...</Link>
                <p className="Index-svg">
                    <SVG>
                        <WaveOpenmoji></WaveOpenmoji>
                    </SVG>
                </p>
            </div>
        </div>
    );
}

export default Index;