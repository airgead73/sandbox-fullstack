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

    <React.Fragment>
      <Route path="/projects/detail" component={ProjectsDetail}/>
      <Route path="/projects/add" component={ProjectsAdd}/>
      <Route path="/projects/update" component={ProjectsUpdate}/>
    </React.Fragment>

  )
}

const PhotosRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/photos/detail" component={PhotosDetail}/>
      <Route path="/photos/add" component={PhotosAdd}/>
      <Route path="/photos/update" component={PhotosUpdate}/>     
    </React.Fragment>
  )
}


const AppRoutes = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={ProjectsLanding}/> 
      <ProjectsRoutes/>
      <Route exact path="/photos" component={PhotosLanding}/> 
      <PhotosRoutes/> 
      <Route path="*" component={NotFound}/>      
    </Switch>
   );
}
 
export default AppRoutes;