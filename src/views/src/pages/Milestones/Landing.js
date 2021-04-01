import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesMilestones } from './../../routes';
import { useLayout } from './../../layout';

const Landing = () => {
  const { path } = useRouteMatch();
  useLayout('landing');
  return (
    <React.Fragment>
      <h2>milestones page</h2>
      <Switch>
        {routesMilestones.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`} component={route.main}/>
          
        ))}
      </Switch>

    </React.Fragment> 
   );
}
 
export default Landing;