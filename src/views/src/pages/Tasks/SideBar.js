import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>tasks sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a task</Link></li>
        <li><Link to={`${url}/list`}>review tasks</Link></li>
      </ul>     
    </React.Fragment> 
   );
}
 
export default SideBar;