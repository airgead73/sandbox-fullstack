import React from 'react';
import { AuthenticationButton } from './../auth';

const Header = ({layout, children}) => {

  return ( 
    <header className={`header header--${layout}`}>
      <h1 className="header__title">portfolio</h1>      
      {children}
      <AuthenticationButton/>
    </header>
   );
}
 
export default Header;