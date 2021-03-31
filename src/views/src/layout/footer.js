import React from 'react';
import { LayoutContext } from './context';

const Footer = () => {
  const layout = React.useContext(LayoutContext);
  const { currentLayout } = layout;  
  return ( 
    <footer className={currentLayout}>
      <p><small>&copy; 2021</small></p>
    </footer>
   );
}
 
export default Footer;