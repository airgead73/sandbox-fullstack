import React from 'react';
import Header from './header';
import Nav from './nav';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  return ( 
    <React.Fragment>
      <Header isAuthenticated={isAuthenticated}/>
      <Nav isAuthenticated={isAuthenticated}/>
    </React.Fragment>
   );
}
 
export default Layout;