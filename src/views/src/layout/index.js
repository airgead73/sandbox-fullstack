import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';

const Layout = ({ children }) => {
  return ( 
    <React.Fragment>
      <Header/>
      <Nav/>
      <Main>
        {children}
      </Main>
    </React.Fragment>
   );
}
 
export default Layout;