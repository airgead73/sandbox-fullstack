import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Add as ProjectsAdd } from './Add';
import { Detail as ProjectsDetail } from './Detail';
import { Update as ProjectsUpdate } from './Update';
import NotFound from './../NotFound';

const Landing = () => {
  return ( 
    <React.Fragment>

      <h2>Projects Landing</h2>
      <Switch>
          <Route path="/projects/add">
            <ProjectsAdd/>
          </Route>
          <Route path="/projects/detail">
            <ProjectsDetail/>
          </Route> 
          <Route path="/projects/update">
            <ProjectsUpdate/>
          </Route> 
          <Route path="/projects/*" component={NotFound}/>
        </Switch>
    </React.Fragment>

   );
}
 
export { Landing };