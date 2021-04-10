import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesMain as routes } from './../../routes';

const Aside = () => {
  return ( 
    <aside className="aside">
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
          >
            <route.sidebar/>
          </Route>
        ))}
      </Switch>
    </aside>
   );
}
 
export default Aside;