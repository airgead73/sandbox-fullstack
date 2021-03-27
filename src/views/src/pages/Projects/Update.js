import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Update = () => {
  const location = useLocation();
  const { project } = location.state;
  return (
    <article>
    <h3>update project</h3>
    <h4>{project.title}
    <br/>
    <small>by {project.author}</small>
    </h4>
    <p>
    <Link 
      key={`update_${project._id}`} 
      to={{
        pathname: `/projects/${project._id}/detail`,
        state: {
          project: project
          }
        }}
        >project detail
        </Link>     
    </p>
    </article>

  )
}

export { Update }