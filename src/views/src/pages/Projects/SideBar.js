import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {useGet} from './../../hooks';

const SideBar = () => {
  const { data: projects, isLoading, error } = useGet('/api/projects?sort=title');
  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4 className="sidebar__title">projects</h4>
      <ul className="sidebar__list">
        <li className="sidebar__item"><Link className="sidebar__link" to={`${url}/add`}>add a project</Link></li>
        <li className="sidebar__item"><Link className="sidebar__link" to={`${url}/list`}>review projects</Link></li>
      </ul>
      <h5 className="sidebar__subtitle">current projects</h5>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {projects && <ul className="sidebar__list list--secondary">
          {projects.map((project) => (
            <li key={project._id} className="sidebar__item">
              <Link
                className="sidebar__link" 
                to={{
                  pathname: `${url}/${project._id}/detail`,
                  state: {
                    view: 'detail',
                    itemId: project._id
                  }
                }}
                >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>}
    </React.Fragment> 
   );
}
 
export default SideBar;