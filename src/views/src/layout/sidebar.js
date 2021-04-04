import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesMain } from './../routes';

const SideBar = ({layout, children}) => {
  return ( 
    <aside className={`sidebar sidebar--${layout}`}>
      <Switch>          
        {routesMain.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
              <route.sidebar/>
          </Route>
        ))}  
      </Switch>
    </aside>
   );
}
 
export default SideBar;