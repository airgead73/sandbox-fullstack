import React from 'react';

const Header = ({children}) => {
  return ( 
    <header>
      <h1>portfolio</h1>
      {children}
    </header>
   );
}
 
export default Header;