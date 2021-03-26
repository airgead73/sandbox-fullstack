import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './../auth';
import { HomeSidebar } from './../pages/Home';
import { ProjectsSidebar } from './../pages/Projects';
import { NotFoundSidebar } from './../pages/NotFound';

const SidebarRoutes = () => {
  return ( 
    <Switch>
    <Route exact path="/" component={HomeSidebar}/>
    <ProtectedRoute path="/projects" component={ProjectsSidebar}/>
    <Route path="*" component={NotFoundSidebar}/>
    </Switch> 
   );
}
 
export default SidebarRoutes;

