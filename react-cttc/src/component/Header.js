import logo from '../asset/logo.svg';
import React from 'react';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="CTTC">CTTC</span>
        </header>
    );
}

export default Header;