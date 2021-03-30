import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesMain } from './routes';
import Layout from './layout';

function App() { 

  return (    

    <Layout>
      <Switch>
        {routesMain.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <route.main/>
          </Route>
        ))}
      </Switch>

    </Layout>


  
  );

}

export default App;
