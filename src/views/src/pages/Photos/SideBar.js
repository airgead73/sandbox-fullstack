import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>photos sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a photo</Link></li>
        <li><Link to={`${url}/list`}>review photos</Link></li>
      </ul>     
    </React.Fragment> 
   );
}
 
export default SideBar;