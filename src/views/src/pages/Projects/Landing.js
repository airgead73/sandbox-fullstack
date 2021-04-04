import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects } from './../../routes';
import { useLayout } from './../../layout';

const Landing = () => {
  const { path } = useRouteMatch();
  useLayout('landing');
  return (
    <React.Fragment>
      <h2 className="main__title">projects page</h2>
      <Switch>
        {routesProjects.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`} component={route.main}/>
          
        ))}
      </Switch>

    </React.Fragment> 
   );
}
 
export default Landing;