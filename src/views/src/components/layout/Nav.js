import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MenuLink = ({exact, to, text}) =>{
  const match = useRouteMatch({
    exact,
    path: to
  })
  return (
    <li className={`list__item${match ? ' active' : ''}`}>
      <Link to={to}>{text}</Link>
    </li>
  )
}

const Nav = () => {
  return ( 
    <nav className="nav">
      <ul>

        <MenuLink exact={true} to="/" text="home"/>
        <MenuLink exact={true} to="/projects" text="projects"/>
        <MenuLink exact={true} to="photos" text="photos"/>

      </ul>
    </nav>
   );
}
 
export default Nav;