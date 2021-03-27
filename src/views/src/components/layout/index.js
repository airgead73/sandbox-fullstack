import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import React from 'react';

const AppLayout = ({ children }) => {
  return ( 
    <React.Fragment>
      <Header>
        <Nav/>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        <p>footer</p>
      </Footer>
    </React.Fragment>
   );
}
 
export default AppLayout;