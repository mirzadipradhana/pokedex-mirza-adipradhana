import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import './assets/App.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
