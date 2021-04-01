import React from 'react';
import { useLayout } from './../../layout';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
  InputText,
  InputNumber,
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
        <InputText title="author"/>           
      </FieldGroup>
      <FieldGroup>
        <InputText title="code"/>
        <InputNumber title="edition"/>
        <InputText title="client"/>
      </FieldGroup>        
      <FieldGroup>
        <TextArea title="notes"/>                                                
      </FieldGroup>
      <BtnGroup>
        <BtnSubmit title="add"/>
      </BtnGroup>      
    </FormPost>

   );
}
 
export default Add;