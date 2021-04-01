import React from 'react';
import { AuthenticationButton } from './../auth';

const Header = ({layout, children}) => {

  return ( 
    <header className={`header header--${layout}`}>
      <h1>portfolio</h1>
      <p><AuthenticationButton/></p>
      {children}
    </header>
   );
}
 
export default Header;