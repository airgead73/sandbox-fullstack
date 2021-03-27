import Header from './Header';
import Nav from './Nav';
import Main from './Main';
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

    </React.Fragment>
   );
}
 
export default AppLayout;