import React from 'react';
import { Link } from 'react-router';

export default ({children}) => (
  <div>
    <Link to='/'>
      <h1>App</h1>
    </Link>
    <hr/>
    {children}
  </div>
);
