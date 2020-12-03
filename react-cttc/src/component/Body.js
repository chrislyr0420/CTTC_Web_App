import logo from '../asset/logo.svg';
import React from 'react';

function Body() {
    return (
        <body className="App-body">
            <div className="body-top-wrapper">
                <div className="body-logo-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
            <div className="body-main-wrapper">
                <div id="left-container" className="container">left content</div>
                <div id="main-container" className="container">main content</div>
                <div id="right-container" className="container">right content</div>
            </div>
        </body>
    );
}

export default Body;