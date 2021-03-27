import React from 'react';
import { Link } from 'react-router-dom';
import projects from './../../data/projects';

const List = () => {
  return (
    <section>
      <h3>projects list</h3>
      <ul>
        {projects.map((project) => (
          <p key={project._id}><li>
            {project.title} by {project.author}
            &nbsp; 
            <br/>
            <small>
            <Link 
              key={`detail_${project._id}`} 
              to={{
                pathname: `/projects/${project._id}/detail`,
                state: {
                  project: project
                }
              }}
            >detail
            </Link>
            &nbsp; | &nbsp;
            <Link 
              key={`update_${project._id}`} 
              to={{
                pathname: `/projects/${project._id}/update`,
                state: {
                  project: project
                }
              }}
            >update
            </Link>
            </small>
          </li></p>
        ))}
      </ul>
    </section>
  )
}

export { List }