import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesMain as routes } from './routes';

import { useAuth0 } from '@auth0/auth0-react';

function App() { 

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>loading...</div>
  }

  return (    

    <Switch>

      {routes.map((route) => (
        <Route 
          key={route.path}
          exact={route.exact}
          path={route.path}
        >
          <route.landing/>
        </Route>
      ))}

    </Switch>

 

  );

}

export default App;
