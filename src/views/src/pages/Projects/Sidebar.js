import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
  const { url } = useRouteMatch();
  return ( 
    <React.Fragment>
      <h1>projects</h1>
      <ul>
        <li><Link to={`${url}`}>projects home</Link></li>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/project1/detail`}>project 1</Link></li>
        <li><Link to={`${url}/project1/update`}>update project 1</Link></li>
        <li><Link to={`${url}/project2/detail`}>project 2</Link></li>
        <li><Link to={`${url}/project2/update`}>update project 2</Link></li>        
      </ul>
    </React.Fragment>
   );
}
 
export default Sidebar;