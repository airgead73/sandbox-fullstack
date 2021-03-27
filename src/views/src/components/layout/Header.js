import React from 'react';
import { AuthenticationButton } from './../../auth';

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