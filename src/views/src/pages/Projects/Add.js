import React from 'react';
import { Form, InputText, TextArea, BtnSubmit } from '../../components/forms';

const Add = () => {
  return ( 
    <Form 
      title="add project"
      action="/api/projects"
      method="POST"
    >
      <InputText title="title"/>
      <InputText title="mode"/>
      <InputText title="material"/>
      <InputText title="category"/>
      <TextArea title="description"/>
      <TextArea title="notes"/>
      <BtnSubmit title="add"/>
    </Form>
   );
}
 
export default Add;