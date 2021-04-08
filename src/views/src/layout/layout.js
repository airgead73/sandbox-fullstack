import React from 'react';
import Header from './header';
import Nav from './nav';
import Sidebar from './sidebar';
import Main from './main';
import Footer from './footer';
import { LayoutContext } from '../contexts/layout';

const Layout = (props) => {
  const layout = React.useContext(LayoutContext);
  const { currentLayout } = layout;
  return ( 
    <React.Fragment>
      <Header layout={currentLayout}>
        <Nav layout={currentLayout}/>
      </Header>
      <Main layout={currentLayout}>
        <Sidebar layout={currentLayout}/>
        {props.children}
      </Main>
      <Footer layout={currentLayout}/>
    </React.Fragment>
   );
}
 
export {
  Layout
};