import React from 'react';
import { AuthenticationButton } from './../auth';

const Header = (props) => {
  return ( 
    <header>
      <h1>portfolio</h1>
      <p><AuthenticationButton/></p>
      {props.children}
    </header>
   );
}
 
export default Header;