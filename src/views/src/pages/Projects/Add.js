import React from 'react';
import { useLayout } from './../../layout';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
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
        <TextArea title="desc"/>
        <TextArea title="notes"/>                                                
      </FieldGroup>
      <BtnGroup>
        <BtnSubmit title="add"/>
      </BtnGroup>      
    </FormPost>

   );
}
 
export default Add;