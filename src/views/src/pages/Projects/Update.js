import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Update = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <article>
    <h3>update project</h3>
    <h4>{item.title}
    <br/>
    <small>by {item.author}</small>
    </h4>
    <p>
    <Link 
      key={`update_${item._id}`} 
      to={{
        pathname: `/projects/${item._id}/detail`,
        state: {
          item: item
          }
        }}
        >project detail
        </Link>     
    </p>
    </article>

  )
}

export { Update }