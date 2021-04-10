import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

const Layout = ({children}) => {
  return ( 
    <React.Fragment>

      <Header>
        <Nav/>
        <Aside/>
        <Footer/>
      </Header>
      <Main>
        {children}
      </Main>

    </React.Fragment>
   );
}
 
export default Layout;