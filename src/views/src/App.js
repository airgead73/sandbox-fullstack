import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { appRoutes } from './routes/index';
import Loading from './pages/Loading';
import Layout from './layout';
import { useAuth0 } from '@auth0/auth0-react';



function App() {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <Loading/>
  }

  return (
    <Layout>
      <Switch>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <route.main/>
        </Route>
        ))}       
      </Switch>
    </Layout>
  );
}

export default App;
