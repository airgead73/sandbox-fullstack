import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects as routes } from './../../routes'

const Landing = () => {
  const { path } = useRouteMatch();
  return ( 
    <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`}> 
            <route.main/>
          </Route>         
        ))}
    </Switch>
   );
}
 
export default Landing;