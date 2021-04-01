import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesPublic, routesProtected } from './routes';
import {Layout } from './layout';

import { useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './auth';

function App() { 

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>loading...</div>
  }

  return (    

    <Layout>
      <Switch>       
        {routesPublic.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <route.landing/>
          </Route>
          ))}
        {routesProtected.map((route) => (
          <ProtectedRoute key={route.path} exact={route.exact} path={route.path} component={route.landing}/>
          ))}         
      </Switch>
    </Layout>  

  );

}

export default App;
