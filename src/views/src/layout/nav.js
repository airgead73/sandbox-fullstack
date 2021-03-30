import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routesMain } from './../routes';

const Nav = () => {
  return ( 
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/tasks">tasks</Link></li>
      </ul> 
      <hr/> 
      <aside>
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