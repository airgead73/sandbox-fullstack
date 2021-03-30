import React from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';

const Layout = (props) => {
  return ( 
    <React.Fragment>
      <Header>
        <Nav/>
      </Header>
      <Main>
        {props.children}
      </Main>
      <Footer/>
    </React.Fragment>
   );
}
 
export default Layout;