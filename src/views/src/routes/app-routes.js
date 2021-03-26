import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './../auth';
import { HomeLanding } from './../pages/Home';
import { ProjectsLanding } from './../pages/Projects';
import { NotFoundLanding } from './../pages/NotFound';

const AppRoutes = () => {
  return ( 
    <Switch>
    <Route exact path="/" component={HomeLanding}/>
    <ProtectedRoute path="/projects" component={ProjectsLanding}/>
    <Route path="*" component={NotFoundLanding}/>
    </Switch> 
   );
}
 
export default AppRoutes;

