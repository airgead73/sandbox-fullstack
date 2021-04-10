import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
  const { url } = useRouteMatch();
  return ( 
    <React.Fragment>
      <h1>projects</h1>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>      
      </ul>
    </React.Fragment>
   );
}
 
export default Sidebar;