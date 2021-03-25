import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Add as ProjectsAdd } from './Add';
import { Detail as ProjectsDetail } from './Detail';
import { Update as ProjectsUpdate } from './Update';
import NotFound from './../NotFound';



const Landing = () => {
  let { path } = useRouteMatch();
  return ( 
    <React.Fragment>

      <h2>Projects Landing</h2>
      <Switch>
          <Route path={`${path}/add`}>
            <ProjectsAdd/>
          </Route>
          <Route path={`${path}/detail`}>
            <ProjectsDetail/>
          </Route> 
          <Route path={`${path}/update`}>
            <ProjectsUpdate/>
          </Route> 
          <Route path="/projects/*" component={NotFound}/>
        </Switch>
    </React.Fragment>

   );
}
 
export { Landing };