import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects as routes } from './../../routes'
import Table from './Table';

const Landing = () => {
  const { path } = useRouteMatch();
  const match = useRouteMatch({
    exact: true,
    path: '/projects'
  });
  
  return ( 
    <React.Fragment>
      {match && <Table/>}
    <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`}> 
            <route.main/>
          </Route>         
        ))}
    </Switch>
    </React.Fragment>
   );
}
 
export default Landing;