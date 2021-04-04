import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routesMain } from './../routes';

const Nav = ({layout}) => {
  return ( 
    <nav className={`nav nav--${layout}`}>
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/">home</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/projects">projects</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/photos">photos</Link></li>
      </ul> 
      
      {/* <aside className={layout}>
        <Switch>          
          {routesMain.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <route.sidebar/>
            </Route>
          ))}  
        </Switch>
      </aside> */}
    </nav>
   );
}
 
export default Nav;