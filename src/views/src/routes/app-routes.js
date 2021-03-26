import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './../auth';
import { HomeLanding } from './../pages/Home';
import { ProjectsLanding, ProjectsAdd, ProjectsList, ProjectsDetail, ProjectsUpdate } from './../pages/Projects';
import { NotFoundLanding } from './../pages/NotFound';

const AppRoutes = () => {
  return ( 
    <Switch>
    <Route exact path="/" component={HomeLanding}/>
      <ProtectedRoute path="/projects" component={ProjectsLanding}/>
      <ProtectedRoute path="/projects/add" component={ProjectsAdd}/>
      <ProtectedRoute path="/projects/list" component={ProjectsList}/>
      <ProtectedRoute path="/projects/detail" component={ProjectsDetail}/>
      <ProtectedRoute path="/projects/update" component={ProjectsUpdate}/>    
    <Route path="*" component={NotFoundLanding}/>
    </Switch> 
   );
}
 
export default AppRoutes;

