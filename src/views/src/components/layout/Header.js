import React from 'react';
import { AuthenticationButton } from './../../auth';
import { useAuth0 } from '@auth0/auth0-react';

const Header = ({ children }) => {

  return ( 
    <header>
      <h1>portfolio application</h1>
      <p><AuthenticationButton/></p>
      { children }
    </header>
   );
}
 
export default Header;