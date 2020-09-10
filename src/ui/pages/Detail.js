import React from 'react';

import logo from '../../assets/logo.svg';
import Link from '../components/Link'

function Detail() {
  return (
    <div>
      <header>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Detail Page
        </p>
        <Link to="/">
          Go To Home
        </Link>
      </header>
    </div>
  );
}

export default Detail;
