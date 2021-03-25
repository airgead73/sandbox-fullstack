import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import Home from './../pages/Home';
import { ProjectsLanding } from './../pages/Projects';
import { ProjectsAdd } from './../pages/Projects';
import { ProjectsDetail } from './../pages/Projects';
import { ProjectsUpdate } from './../pages/Projects';
import { PhotosLanding } from './../pages/Photos';
import { PhotosAdd } from './../pages/Photos';
import { PhotosDetail } from './../pages/Photos';
import { PhotosUpdate } from './../pages/Photos';
import NotFound from './../pages/NotFound';

const ProjectsRoutes = () => {
  return (

    <Switch.Fragment>
      <Route path="/projects/detail" component={ProjectsDetail}/>
      <Route path="/projects/add" component={ProjectsAdd}/>
      <Route path="/projects/update" component={ProjectsUpdate}/>
      <Route path="*" component={NotFound}/> 
    </Switch.Fragment>

  )
}

const PhotosRoutes = () => {
  return (
    <Switch>
      <Route path="/photos/detail" component={PhotosDetail}/>
      <Route path="/photos/add" component={PhotosAdd}/>
      <Route path="/photos/update" component={PhotosUpdate}/>  
      <Route path="*" component={NotFound}/>    
    </Switch>
  )
}


const AppRoutes = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={ProjectsLanding}/> 
      <Route exact path="/photos" component={PhotosLanding}/> 
      <Route path="*" component={NotFound}/>      
    </Switch>
   );
}
 
export {
  AppRoutes,
  ProjectsRoutes,
  PhotosRoutes
};