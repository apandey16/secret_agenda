import React from 'react';
import logo from '../images/SecretAgenda - White.png';
import './style.css'

const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center', textWrap:'wrap' }}>
            <img src={logo.src} alt="Logo" />
        </header>
    );
};


export default Header;