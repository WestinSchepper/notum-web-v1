import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default ({ children }) => (
  <div>
    <header>
      <Link to='/'>
        <FontAwesome
          name='home'
          size="2x"
          style={{ color: '#000000' }}
        />
      </Link>
    </header>
    {children}
  </div>
);
