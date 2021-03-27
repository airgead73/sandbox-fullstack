import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import NotFound from '../NotFound';

const ProjectsAdd = () => {
  return (
    <h3>add project</h3>
  )
}

const ProjectsList = () => {
  return (
    <h3>projects list</h3>
  )
}

const ProjectsDetail = () => {
  const { id } = useParams();
  return (
    <h3>project detail: {id}</h3>
  )
}

const ProjectsUpdate = () => {
  const { id } = useParams();
  return (
    <h3>update project: {id}</h3>
  )
}

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
        <Route path={`${path}/add`} component={ProjectsAdd}/>
        <Route path={`${path}/list`} component={ProjectsList}/>
        <Route path={`${path}/:id/detail`} component={ProjectsDetail}/>
        <Route path={`${path}/:id/update`} component={ProjectsUpdate}/>
        <Route path={`${path}/*`} component={NotFound}/>
      </Switch>
    </React.Fragment>
   );
}

export { Landing };