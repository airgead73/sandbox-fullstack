import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, InputText, TextArea, BtnSubmit } from '../../components/forms';
import { useGet } from './../../hooks';

const Update = () => {
  const { id } = useParams();
  const { data: project } = useGet(`/api/projects/${id}`);
  return ( 
    <React.Fragment>
      {project && (
        <Form 
          title={`Update ${project.title}`}
          action={`/api/projects/${project._id}`}
          method="PUT"
          to={`/projects/${project._idid}/detail`}
        >
          <InputText title="title" default={project.title}/>
          <InputText title="mode" default={project.mode}/>
          <InputText title="material" default={project.material}/>
          <InputText title="category" default={project.category}/>
          <TextArea title="description" default={project.description}/>
          <TextArea title="notes" default={project.notes}/>
          <BtnSubmit title="update"/>
      </Form>       
      )}
    </React.Fragment>
   );
}
 
export default Update;