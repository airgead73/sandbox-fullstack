import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BtnGroup, BtnSubmit, FieldGroup, Form, InputHidden, UploadImg } from '../../components/forms';
import { useGet } from '../../hooks';

const Detail = () => {

  const { id } = useParams();
  const { data: item, isLoading, error } = useGet(`/api/projects/${id}`);


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

      <Form
        title="add photo"
        action="/api/photos"
        method="post"
        name="photo__add"
        size="medium"
      >
        <FieldGroup>
          <InputHidden title="project" defaultValue={id}/>
          <UploadImg title="image"/>
        </FieldGroup>
        <BtnGroup>
          <BtnSubmit title="add photo"/>
        </BtnGroup>

      </Form>


    </React.Fragment>
   );
}
 
export default Detail;