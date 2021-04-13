import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, InputText, InputImg, TextArea, BtnSubmit } from '../../components/forms';
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
          to={`/projects/${project._id}/detail`}
          message="Photo is loading"
        >
          <InputText title="title"/>
          <InputText title="caption"/>
          <InputText title="project" default={project._id}/>          
          <TextArea title="alt"/>
          <InputImg title="image"/>
          <BtnSubmit title="add"/>
      </Form>       
      )}
    </React.Fragment>
   );
}
 
export default Add;