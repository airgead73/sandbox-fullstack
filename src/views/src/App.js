import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { ProjectsLanding } from './pages/Projects';
import { PhotosLanding } from './pages/Photos';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={ProjectsLanding}/>
      <Route path="/photos" component={PhotosLanding}/>
    </Switch>
  );
}

export default App;
