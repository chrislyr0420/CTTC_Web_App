import logo from '../asset/logo.svg';
import React from 'react';

function Footer() {
    return (
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="CTTC">CTTC</span>
        </footer>
    );
}

export default Footer;