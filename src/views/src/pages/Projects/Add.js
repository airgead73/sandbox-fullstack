import React from 'react';
import { Form, InputText, BtnSubmit } from '../../components/forms';
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
      <InputText title="project name"/>
      <BtnSubmit title="add"/>

    </Form>

   );
}
 
export default Add;