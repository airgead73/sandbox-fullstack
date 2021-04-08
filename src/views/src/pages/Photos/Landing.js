import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesPhotos } from './../../routes';
import { useLayout } from './../../hooks';

const Landing = () => {
  const { path } = useRouteMatch();
  useLayout('landing');

  return ( 
    <React.Fragment>
      <h2 className="main__title">photos page</h2>
      <Switch>
        {routesPhotos.map((route) => (
          <Route key={route.path} path={`${path}${route.path}`} component={route.main}/>
        ))}
      </Switch>      
    </React.Fragment>
   );
}
 
export default Landing;