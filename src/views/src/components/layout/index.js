import React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Nav from './nav';

const Layout = ({ children }) => {
  return ( 
    <React.Fragment>
      <Header/>
      <Nav/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </React.Fragment>
   );
}
 
export default Layout;