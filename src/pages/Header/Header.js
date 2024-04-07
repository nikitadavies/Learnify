import React from 'react';
import { CapLogo } from '../../assets';
import './Header.css';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
     <div className="logo">
        <img
          src={CapLogo}
          alt="Company Logo"
          style={{
            width: '55px',
            height: "55px",
            background: "#ffff",
            marginTop: '5px'
          }}
        />
      </div>
      <h2 style={{ marginLeft: "10px"}}>Learnify</h2>
    </header>
  );
}

export default Header;
