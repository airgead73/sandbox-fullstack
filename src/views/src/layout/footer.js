import React from 'react';

const Footer = ({layout}) => {
  return ( 
    <footer className={`footer footer--${layout}`}>
      <p><small>&copy; 2021</small></p>
    </footer>
   );
}
 
export default Footer;