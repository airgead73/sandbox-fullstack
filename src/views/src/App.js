import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './components/layout';
import { Landing as ProjectsLanding } from './pages/Projects';
import { Landing as HomeLanding } from './pages/Home';
import NotFound from './pages/NotFound';

function App() {  

  return (
    
      <AppLayout>
        <Switch>
          <Route path="/" exact component={HomeLanding}/>
          <Route path="/projects" component={ProjectsLanding}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </AppLayout>      
  
  );
}

export default App;
