import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './auth';
import { useAuth0 } from '@auth0/auth0-react';
import AppLayout from './components/layout';
import { Landing as ProjectsLanding } from './pages/Projects';
import { Landing as HomeLanding } from './pages/Home';
import NotFound from './pages/NotFound';

function App() {  

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    
    <AppLayout>
      <Switch>
        <Route path="/" exact component={HomeLanding}/>
        <ProtectedRoute path="/projects" component={ProjectsLanding}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </AppLayout>      
  
  );

}

export default App;
