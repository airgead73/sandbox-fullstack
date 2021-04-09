import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { routesProjects } from './../../routes';

const Landing = () => {
  const { path } = useRouteMatch(); 
  const { location } = useHistory();
  console.log(location)

  return (
    <React.Fragment>
      <Switch>
        {routesProjects.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`} component={route.main}/>          
        ))}
      </Switch>

    </React.Fragment> 
   );
}
 
export default Landing;