import React from 'react';
import Header from './header';
import Nav from './nav';
import Sidebar from './sidebar';
import Main from './main';
import Footer from './footer';
import { LayoutContext, LayoutProvider } from '../contexts/layout';
import { useLayout } from '../hooks/useLayout';

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
  Layout,
  LayoutContext,
  LayoutProvider,
  useLayout
};