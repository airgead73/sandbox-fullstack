import React from 'react';
import { AuthenticationButton } from '../auth';

const Header = () => {
  return ( 
    <header>
      <h1>portfolio application</h1>
      <AuthenticationButton/>
    </header>
   );
}
 
export default Header;