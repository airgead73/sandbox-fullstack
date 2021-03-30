import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects } from './../../routes';

const Landing = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <h2>milestones page</h2>
      <Switch>
        {routesProjects.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`} component={route.main}/>
          
        ))}
      </Switch>

    </React.Fragment> 
   );
}
 
export default Landing;