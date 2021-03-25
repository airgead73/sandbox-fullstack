import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { ProjectsLanding } from './pages/Projects';
import { ProjectsAdd } from './pages/Projects';
import { ProjectsDetail } from './pages/Projects';
import { ProjectsUpdate } from './pages/Projects';
import { PhotosLanding } from './pages/Photos';
import { PhotosAdd } from './pages/Photos';
import { PhotosDetail } from './pages/Photos';
import { PhotosUpdate } from './pages/Photos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/projects">
        <ProjectsLanding/>
        <Switch>
          <Route path="/projects/add">
            <ProjectsAdd/>
          </Route>
          <Route path="/projects/detail">
            <ProjectsDetail/>
          </Route> 
          <Route path="/projects/update">
            <ProjectsUpdate/>
          </Route> 
          <Route path="*" component={NotFound}/>              
        </Switch>
      </Route>
      <Route path="/photos">
        <PhotosLanding/>
        <Switch>
          <Route path="/photos/add">
            <PhotosAdd/>
          </Route>
          <Route path="/photos/detail">
            <PhotosDetail/>
          </Route> 
          <Route path="/photos/update">
            <PhotosUpdate/>
          </Route> 
          <Route path="*" component={NotFound}/>              
        </Switch>
      </Route>      
    
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default App;
