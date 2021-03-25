import React from "react";
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";

import Layout from "./layout";
import { Home, Projects } from './views';
import { ProtectedRoute } from './auth';

const App = () => {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Home/>
    </React.Fragment>
    // <Layout>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     {/* <ProtectedRoute path="/projects" component={Projects} /> */}
    //   </Switch>
    // </Layout>
  );
};

export default App;
