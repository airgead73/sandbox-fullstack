import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Add, List, Detail, Update } from './index';
import NotFound from '../NotFound';

const Landing = () => {

  const { url, path } = useRouteMatch();

  return ( 
    <React.Fragment>
      <h2>projects page</h2>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/list`}>projects list</Link></li>     
        <li><Link to={`${url}/projectaljkg/detail`}>project detail</Link></li>
        <li><Link to={`${url}/projectllaljkg/update`}>update project</Link></li>                    
      </ul>
      <Switch>
        <Route path={`${path}/add`} component={Add}/>
        <Route path={`${path}/list`} component={List}/>
        <Route path={`${path}/:id/detail`} component={Detail}/>
        <Route path={`${path}/:id/update`} component={Update}/>
        <Route path={`${path}/*`} component={NotFound}/>
      </Switch>
    </React.Fragment>
   );
}

export { Landing };