import React from 'react';
import { Form, InputText, TextArea, BtnSubmit } from '../../components/forms';
import { useGet } from './../../hooks';

const Add = () => {
  const { id } = useParams();
  const { data: project, isLoading, error } = useGet(`/api/projects/${id}`);  
  return ( 
    <React.Fragment>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {project && (
        <Form 
          title={`${project.title}: add photo`}
          action="/api/photos"
          method="POST"
          to={`/projects/${project._idid}/detail`}
        >
          <InputText title="title"/>
          <InputText title="caption"/>
          <InputText title="project" default={project._id}/>          
          <TextArea title="notes"/>
          <BtnSubmit title="update"/>
      </Form>       
      )}
    </React.Fragment>
   );
}
 
export default Add;