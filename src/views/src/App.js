import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import {
  HomeLanding,
  HomeSidebar
} from './pages/Home';

import {
  ProjectsLanding,
  ProjectsSidebar
} from './pages/Projects';

import {
  PhotosLanding,
  PhotosSidebar
} from './pages/Photos';

const NotFoundSidebar = () => {
  return <h2>Sidebar: Not Found</h2>
}

const NotFoundMain = () => {
  return <h2>Page Not Found</h2>
}


const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <HomeSidebar/>,
    main: () => <HomeLanding/>,
  },
  {
    path: '/projects',
    exact: false,
    sidebar: () => <ProjectsSidebar/>,
    main: () => <ProjectsLanding/>
  },
  {
    path: '/photos',
    exact: false,
    sidebar: () => <PhotosSidebar/>,
    main: () => <PhotosLanding/>
  },  
  {
    path: '*',
    exact: false,
    sidebar: () => <NotFoundSidebar/>,
    main: () => <NotFoundMain/>
  }  
];

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Fullstack Application</h1>
      </header>
      <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/photos">photos</Link></li>
      </ul>
      <hr/>
      <Switch>

      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <route.sidebar/>
        </Route>
      ))}
      </Switch>
    </nav>
      <main>
        <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.main/>
          </Route>
        ))}       
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
