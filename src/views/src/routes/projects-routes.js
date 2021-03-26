import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './../auth';
import { NotFoundLanding } from './../pages/NotFound';
import {
  ProjectsLanding, 
  ProjectsAdd,
  ProjectsDetail,
  ProjectsList,
  ProjectsUpdate,
} from './../pages/Projects';

const ProjectsRoutes = () => {
  return ( 
    <Switch>
      <ProtectedRoute path="/projects" component={ProjectsLanding}/>
      <ProtectedRoute path="/projects/add" component={ProjectsAdd}/>
      <ProtectedRoute path="/projects/list" component={ProjectsList}/>
      <ProtectedRoute path="/projects/detail" component={ProjectsDetail}/>
      <ProtectedRoute path="/projects/update" component={ProjectsUpdate}/>
      <ProtectedRoute path="*" component={NotFoundLanding}/>
    </Switch> 
   );
}
 
export default ProjectsRoutes;

