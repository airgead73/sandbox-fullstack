import React from 'react';
import AuthenticationButton from '../auth/authnentication-button';

const Header = () => {
  return ( 
    <header className="header">
      <h1 className="header__title">fullstack sandbox</h1>
      <AuthenticationButton/>
     </header>
   );
}
 
export default Header;