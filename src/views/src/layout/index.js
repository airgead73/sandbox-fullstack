import React from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';
import { LayoutContext, LayoutProvider } from './context';
import { useLayout } from './useLayout';

const Layout = (props) => {
  const layout = React.useContext(LayoutContext);
  const { currentLayout } = layout;
  return ( 
    <React.Fragment>
      <Header layout={currentLayout}>
        <Nav layout={currentLayout}/>
      </Header>
      <Main layout={currentLayout}>
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