import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BtnDelete } from '../../components/forms';
import { useGet } from './../../hooks'

const Detail = () => {
  const { id } = useParams();
  const { data: project, isLoading, error } = useGet(`/api/projects/${id}`);
  return ( 
    <React.Fragment>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {project && (
        <article>
          <h4>{project.title}</h4>
          <p>
            <small>
              <Link to={`/projects/${project._id}/update`}>update</Link>
              &nbsp;|&nbsp;
              <Link to={`/projects/${project._id}/addphoto`}>add photo</Link>

            </small>
          </p>
          <p>
          <BtnDelete 
            endpoint={`/api/projects/${project._id}`}
            to="/projects"
          >
            delete
          </BtnDelete>
          </p>
          <ul>
            <li>{project.mode}</li>
            <li>{project.material}</li>
            <li>{project.category}</li>
          </ul>
        </article>
      )}
    </React.Fragment>
   );
}
 
export default Detail;