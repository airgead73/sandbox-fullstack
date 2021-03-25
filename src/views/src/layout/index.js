import React from 'react';
import Header from './header';
import Nav from './nav';
import { useAuth0 } from '@auth0/auth0-react';
import Main from './main';

const Layout = ({children}) => {
  const { isAuthenticated } = useAuth0();
  return ( 
    <React.Fragment>
      <Header isAuthenticated={isAuthenticated}/>
      <Nav isAuthenticated={isAuthenticated}/>
      <Main>
        {children}
      </Main>
    </React.Fragment>
   );
}
 
export default Layout;