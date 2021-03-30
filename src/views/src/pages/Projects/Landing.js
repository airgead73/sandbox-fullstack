import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects } from './../../routes';

const Landing = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <h2>projects page</h2>
      <Switch>
        {routesProjects.map((route) => (
          <Route path={`${path}${route.path}`}>
            <route.main/>
          </Route>
        ))}
      </Switch>

    </React.Fragment> 
   );
}
 
export default Landing;