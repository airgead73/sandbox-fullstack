import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { project } = location.state;
  return (
    <article>
    <h3>project detail</h3>
    <h4>{project.title}
    <br/>
    <small>by {project.author}</small>
    </h4>
    <p>
    <Link 
      key={`update_${project._id}`} 
      to={{
        pathname: `/projects/${project._id}/update`,
        state: {
          project: project
          }
        }}
        >update project
        </Link>     
    </p>
    </article>

  )
}

export { Detail }