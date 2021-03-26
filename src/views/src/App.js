import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Landing = () => {
  return ( 
    <div>landing page</div>
   );
}

const ProjectsLanding = () => {
  return ( 
    <div>ProjectsLanding</div>
   );
}


function App() {

  return (
    <React.Fragment>
      <header>
        <h1>portfolio application</h1>
        <nav>
          <ul>
            <li to="/"><Link>home</Link></li>
            <li to="/projects"><Link>projects</Link></li>                        
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/projects" component={ProjectsLanding}/>
        </Switch>
      </main>
      <footer>

      </footer>
      
    </React.Fragment>
  );
}

export default App;
