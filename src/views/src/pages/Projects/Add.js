import React from 'react';
import { Form, InputText, BtnSubmit, UploadImg } from '../../components/forms';
import { useLayout } from './../../hooks';

const Add = () => {

  useLayout('add');

  return ( 
    
    <Form
      method="POST"
      action="/api/projects"
      name="project__add"
      size="large"
      title="add project"
    >
      <UploadImg title="add photo"/>
      <BtnSubmit title="add"/>

    </Form>

   );
}
 
export default Add;