import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { routesMain as routes } from './routes';


function App() { 

  return (    

    <Layout>
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
    </Layout> 

  );

}

export default App;
