import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { appRoutes } from './../routes/index';

const Nav = () => {
  return ( 
    <nav>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/projects">projects</Link></li>
      <li><Link to="/photos">photos</Link></li>
    </ul>
    <hr/>
    <Switch>

    {appRoutes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <route.sidebar/>
      </Route>
    ))}
    </Switch>
  </nav>
   );
}
 
export default Nav;