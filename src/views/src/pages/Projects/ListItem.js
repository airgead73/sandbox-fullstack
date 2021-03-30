import React from 'react';
import { Link } from 'react-router-dom';
import { BtnDelete } from '../../components/forms';

const ListItem = ({ item }) => {
  return ( 
    <article>
      <p><li>
        {item.title} by {item.author}
          &nbsp; 
          <br/>
          <small>
            <Link 
              to={{
                pathname: `/projects/${item._id}/detail`,
                state: {
                  item: item
                }
              }}
            >detail
            </Link>
            &nbsp; | &nbsp;
            <Link 
              to={{
                pathname: `/projects/${item._id}/update`,
                state: {
                  item: item
                }
              }}
            >update
            </Link>
            &nbsp; | &nbsp;
            <BtnDelete
              title="delete"
              item={item._id}
              endpoint={`/api/projects/${item._id}`}
            />
            </small>
          </li>
          </p>      

    </article>
   );
}
 
export { ListItem };