import React from 'react';
import { Route, Link } from 'react-router-dom';
import { routes_projects as routes } from './../../routes/app-routes';

const Nav = () => {
  return ( 
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
      </ul>
      <hr/>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <route.sidebar/>
        </Route>
      ))}
    </nav>
   );
}
 
export default Nav;