import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routesMain } from './../routes';

const Nav = ({layout}) => {
  return ( 
    <nav className={`nav nav--${layout}`}>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/photos">photos</Link></li>
      </ul> 
      <hr/> 
      <aside className={layout}>
        <Switch>          
          {routesMain.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <route.sidebar/>
            </Route>
          ))}  
        </Switch>
      </aside>
    </nav>
   );
}
 
export default Nav;