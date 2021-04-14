import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';
import Message from './Message';
import { FormProvider } from './../../contexts';

const Layout = ({children}) => {
  return ( 
    
  <FormProvider>
      <Header>
        <Nav/>
        <Aside/>
        <Footer/>
      </Header>
      <Main>
        <Message/>
        {children}
      </Main>
  </FormProvider>

   );
}
 
export default Layout;