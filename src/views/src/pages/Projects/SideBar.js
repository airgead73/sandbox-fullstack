import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useFetch from './../../fetch/useFetch';

const SideBar = (props) => {
  const { data: projects, isLoading, error } = useFetch('/api/projects?client=zovio');
  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>projects sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/list`}>review projects</Link></li>
      </ul>
      <h5>current projects</h5>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {projects && <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <Link 
                to={{
                  pathname: `${url}/${project._id}/detail`,
                  state: {
                    item: project
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