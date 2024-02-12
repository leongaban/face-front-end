import React from 'react';

import './navigation.css';

function Navigation() {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className="sign-out">Sign Out</p>
    </nav>
  );
}

export default Navigation;
