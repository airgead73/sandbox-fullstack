import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Add, Detail, Update, Search } from './index';
import NotFound from '../NotFound';

const Landing = () => {

  const { url, path } = useRouteMatch();

  return ( 
    <React.Fragment>
      <h2>projects page</h2>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/search`}>project search</Link></li>  
      </ul>
    
      <Switch>
        <Route path={`${path}/add`} component={Add}/>
        <Route path={`${path}/search`}>
          <Search initial="/api/projects"/>
        </Route>
        <Route path={`${path}/:id/detail`} component={Detail}/>
        <Route path={`${path}/:id/update`} component={Update}/>
        <Route path={`${path}/*`} component={NotFound}/>
      </Switch>
    </React.Fragment>
   );
}

export { Landing };