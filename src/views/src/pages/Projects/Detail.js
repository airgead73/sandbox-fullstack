import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Detail = () => {

  const location = useLocation();
  const { item } = location.state;

  return ( 
    <article>
      <h3>project detail</h3>
      <h4>{item.title}</h4>
      <p>by {item.author}</p>
      <p>
      <Link 
        key={`update_${item._id}`} 
        to={{
          pathname: `/projects/${item._id}/update`,
          state: {
            item: item
            }
        }}
      >update project
      </Link>     
    </p>
    </article>
   );
}
 
export default Detail;