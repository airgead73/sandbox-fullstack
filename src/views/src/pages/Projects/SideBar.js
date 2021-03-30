import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>projects sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/list`}>review projects</Link></li>
      </ul>
    </React.Fragment> 
   );
}
 
export default SideBar;