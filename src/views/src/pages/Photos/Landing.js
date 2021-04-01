import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesPhotos } from './../../routes';
import { useLayout } from './../../layout';

const Landing = () => {
  const { path } = useRouteMatch();
  useLayout('landing');

  return ( 
    <React.Fragment>
      <h2>photos page</h2>
      <Switch>
        {routesPhotos.map((route) => (
          <Route path={`${path}${route.path}`} component={route.main}/>
        ))}
      </Switch>      
    </React.Fragment>
   );
}
 
export default Landing;