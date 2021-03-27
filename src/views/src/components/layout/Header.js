import React from 'react';

const Header = ({ children }) => {
  return ( 
    <header>
      <h1>portfolio application</h1>
      { children }
    </header>
   );
}
 
export default Header;