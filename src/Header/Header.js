import React from 'react';
import './Header.scss';
import logo from '../CardImages/poker-clip-art.png';

export const Header = () => {
  return (
    <section className="header_section">
          <img className="home_logo1" alt="card logo" src={logo}/>
          <h2 className="header_h2">Welcome<span><br />Player</span></h2>
          <img className="home_logo2" alt="card logo" src={logo}/>
    </section>
  );
}

export default Header;
