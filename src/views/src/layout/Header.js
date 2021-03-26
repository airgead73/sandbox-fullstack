import React from 'react';
import { AuthenticationButton } from '../auth';

const Header = ({ children }) => {
  return ( 
    <header>
      <h1>portfolio application</h1>
      <AuthenticationButton/>
      { children }
    </header>
   );
}
 
export default Header;