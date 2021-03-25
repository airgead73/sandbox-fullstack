import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './../pages/Home';
import { ProjectsLanding } from './../pages/Projects';

import { PhotosLanding } from './../pages/Photos';
import { PhotosAdd } from './../pages/Photos';
import { PhotosDetail } from './../pages/Photos';
import { PhotosUpdate } from './../pages/Photos';
import NotFound from './../pages/NotFound';


const AppRoutes = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects">
        <ProjectsLanding/>

      </Route>
      <Route exact path="/photos">
        <PhotosLanding/>
        <Switch>
          <Route path="/add">
            <PhotosAdd/>
          </Route>
          <Route path="/detail">
            <PhotosDetail/>
          </Route> 
          <Route path="/update">
            <PhotosUpdate/>
          </Route> 
          <Route path="/photos/*" component={NotFound}/>  
        </Switch>
      </Route>      
    
      <Route path="*" component={NotFound}/>      
    </Switch>
   );
}
 
export default AppRoutes;