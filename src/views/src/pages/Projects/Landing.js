import React, { useContext, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { routesProjects } from './../../routes';
import { LayoutContext } from './../../contexts';

const Landing = () => {
  const { path } = useRouteMatch();
  const { changeLayout } = useContext(LayoutContext);

  useEffect(() => {

    changeLayout('landing');

  },[]);

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