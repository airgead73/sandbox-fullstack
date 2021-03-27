import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Landing as ProjectsLanding } from './pages/Projects';
import { Landing as HomeLanding } from './pages/Home';
import NotFound from './pages/NotFound';

function App() {  

  return (
    <React.Fragment>
      <header>
        <h1>portfolio application</h1>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>     
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={HomeLanding}/>
          <Route path="/projects" component={ProjectsLanding}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </main>
      <footer>

      </footer>
      
    </React.Fragment>
  );
}

export default App;
