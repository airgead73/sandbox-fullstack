import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BtnDelete } from '../../components/forms';

const Detail = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <article>
    <h3>project detail</h3>
    <h4>{item.title}
    <br/>
    <small>by {item.author}</small>
    </h4>
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
    <p>
    <BtnDelete
      title="delete"
      item={item._id}
      endpoint={`/api/projects/${item._id}`}
      return="/projects/list"
    />
    </p>
    </article>

  )
}

export { Detail }