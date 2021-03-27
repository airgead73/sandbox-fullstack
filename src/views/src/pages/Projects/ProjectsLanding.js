import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import NotFound from './../NotFound';

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
  const { projectID } = useParams();
  return (
    <h3>project detail: {projectID}</h3>
  )
}

const ProjectsUpdate = () => {
  const { projectID } = useParams();
  return (
    <h3>update project: {projectID}</h3>
  )
}

const ProjectsLanding = () => {

  const { url, path } = useRouteMatch();
  console.log({
    projects_url: url,
    projects_path: path
  });

  return ( 
    <React.Fragment>
      <h2>projects page</h2>
      <ul>
        <li><Link to="/projects/add">add a project</Link></li>
        <li><Link to="/projects/list">projects list</Link></li>     
        <li><Link to="/projects/projectabc/detail">project detail</Link></li>
        <li><Link to="/projects/projectabc/update">update project</Link></li>                    
      </ul>
      <Switch>
        <Route path="/projects/add" component={ProjectsAdd}/>
        <Route path="/projects/list" component={ProjectsList}/>
        <Route path="/projects/:projectID/detail" component={ProjectsDetail}/>
        <Route path="/projects/:projectID/update" component={ProjectsUpdate}/>
        <Route path="/projects/*" component={NotFound}/>
      </Switch>
    </React.Fragment>
   );
}

export default ProjectsLanding;