import React from 'react';
import { useLayout } from './../../layout';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
  BtnReset,
  InputText,
  TextArea 
} from './../../components/forms';

const Add = () => {

  useLayout('add');

  return ( 
    
    <FormPost
      method="POST"
      action="/api/projects"
      target="/projects"
      enctype="application/json"
      title="add a project"
      status="initial"
      size="large"    
    >
      <FieldGroup>
        <InputText title="title"/>
                 
      </FieldGroup>
      <FieldGroup>
      <InputText title="mode"/>  
        <InputText title="material"/>
        <InputText title="category"/>
      </FieldGroup>        
      <FieldGroup>
        <TextArea title="desc"/>
        <TextArea title="notes"/>                                                
      </FieldGroup>
      <BtnGroup>
        <BtnSubmit title="add"/>
        <BtnReset title="reset"/>
      </BtnGroup>      
    </FormPost>

   );
}
 
export default Add;