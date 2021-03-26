import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading';
import Layout from './layout';
import { useAuth0 } from '@auth0/auth0-react';
import {AppRoutes} from './routes';

function App() {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <Loading/>
  }

  return (
    <Layout>
      <AppRoutes/>
    </Layout>
  );
}

export default App;
