import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4 className="sidebar__title">photos sidebar</h4>
      <ul className="sidebar__list">
        <li className="sidebar__item"><Link className="sidebar__link" to={`${url}/add`}>add a photo</Link></li>
        <li className="sidebar__item"><Link className="sidebar__link" to={`${url}/list`}>review photos</Link></li>
      </ul>     
    </React.Fragment> 
   );
}
 
export default SideBar;