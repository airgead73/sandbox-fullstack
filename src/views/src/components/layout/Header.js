import React from 'react';
import { AuthenticationButton } from '../../auth';

const Header = ({children}) => {
  return ( 
    <header className="header">
      <h1>portfolio</h1>
      <p style={{textAlign: 'center'}}><AuthenticationButton/></p>
      {children}
    </header>
   );
}
 
export default Header;