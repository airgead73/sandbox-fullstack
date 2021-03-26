import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { appRoutes } from './../routes/index';
import { ProtectedRoute } from './../auth';

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

    {/* {appRoutes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <route.sidebar/>
      </Route>
    ))} */}
        {appRoutes.map((route) => {
          console.log(route.protected)
          if(route.protected) {
            return <ProtectedRoute key={route.path} path={route.path} component={route.main}/>
          } else {
            return <Route key={route.path} path={route.path} component={route.sidebar}/>
          }
        })}    
    </Switch>
  </nav>
   );
}
 
export default Nav;