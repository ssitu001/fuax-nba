import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className="Header-header">
    <Link to="/"><img src='./images/logo.png' className="Header-logo" alt="" /></Link>
    <Link to="/teams">Teams</Link>
  </header>
);

export default Header;


