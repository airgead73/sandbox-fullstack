import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useLayout } from './../../layout';

const Detail = () => {

  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`/api/projects/${id}`);

  useLayout('detail');

  return ( 
    <React.Fragment>
      {isLoading && <div>loading...</div>}
      {error && <div>error</div>}
      {item && <article>
        <h3>project detail</h3>
        <h4>{item.title} | &nbsp;
          
          <Link 
          key={`update_${item._id}`} 
          to={{
            pathname: `/projects/${item._id}/update`,
            state: {
              item: item
              }
          }}
        >update
        </Link> 
          
        </h4>
        <ul>
          <li>
            <p>{item.mode}</p>
          </li>
          <li>
            <p>{item.material}</p>
          </li>
          <li>
            <p>{item.category}</p>
          </li>
        </ul>
        <p>
    
      </p>
      </article>}
    </React.Fragment>
   );
}
 
export default Detail;