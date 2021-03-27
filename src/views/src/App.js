import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Landing as ProjectsLanding } from './pages/Projects';
import NotFound from './pages/NotFound';

const Landing = () => {

  return ( 
    <h2>landing page</h2>
   );
}

const PhotosLanding = () => {

  const { url, path } = useRouteMatch();
  console.log({
    photos_url: url,
    photos_path: path
  });

  return ( 
    <h2>photos page</h2>
   );
}

function App() { 

  const { url, path } = useRouteMatch();
  console.log({
    app_url: url,
    app_path: path
  });  

  return (
    <React.Fragment>
      <header>
        <h1>portfolio application</h1>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>     
            <li><Link to="/photos">photos</Link></li>                   
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/projects" component={ProjectsLanding}/>
          <Route path="/photos" component={PhotosLanding}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </main>
      <footer>

      </footer>
      
    </React.Fragment>
  );
}

export default App;
