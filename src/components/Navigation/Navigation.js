import React from 'react'

import './Navigation.css'

function Navigation() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p className="sign-out">Sign Out</p>
    </nav>
  )
}

export default Navigation
