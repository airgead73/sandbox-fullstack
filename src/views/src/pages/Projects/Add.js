import React, { useEffect, useContext } from 'react';
import { Form, InputText, TextArea, BtnSubmit, BtnReset, BtnGroup, FieldGroup } from '../../components/forms';
import { LayoutContext } from './../../contexts';

const Add = () => {
  const { changeLayout } = useContext(LayoutContext);

  useEffect(() => {

    changeLayout('add');

  },[]);

 return ( 
    
    <Form
      method="POST"
      action="/api/projects"
      name="project__add"
      size="large"
      title="add project"
    >

      <FieldGroup>
        <InputText title="title"/>
        <InputText title="mode"/>
      </FieldGroup>
      <FieldGroup>
        <InputText title="material"/>
        <InputText title="category"/>
      </FieldGroup> 
      <FieldGroup>
        <TextArea title="description"/>
        <TextArea title="notes"/>
      </FieldGroup> 
      <BtnGroup>
        <BtnSubmit title="add"/>
        <BtnReset title="reset"/>
      </BtnGroup>  

    </Form>

   );
}
 
export default Add;