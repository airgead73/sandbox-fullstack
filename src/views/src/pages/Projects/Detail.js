import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './../../fetch/useFetch';
import { LayoutContext } from './../../layout';

const Detail = () => {

  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`/api/projects/${id}`);
  const layout = React.useContext(LayoutContext);
  const { currentLayout, changeLayout } = layout;

  useEffect(() => {
    changeLayout('detail')
  },[])

  return ( 
    <React.Fragment>
      {isLoading && <div>loading...</div>}
      {error && <div>error</div>}
      {item && <article>
        <h3 className={currentLayout}>project detail</h3>
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
      </article>}
    </React.Fragment>
   );
}
 
export default Detail;