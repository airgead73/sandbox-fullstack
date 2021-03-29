import React from 'react';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
  InputText,
  InputNumber,
  TextArea 
} from '../../components/forms';

const Add = () => {

  return (
    <React.Fragment>
      <h2>add project</h2>
      <FormPost
        method="POST"
        action="/api/projects"
        enctype="application/json"
        title="add a project"
      >
        <FieldGroup>
        <InputText
            title="title"
          />
          <InputText
            title="author"
          />           
        </FieldGroup>
        <FieldGroup>

          <InputText
            title="code"
          />
          <InputNumber
            title="edition"
          />
          <InputText
            title="client"
          />
        </FieldGroup>
        
        <FieldGroup>

          <TextArea
            title="notes"
          />                                                
        </FieldGroup>
        <BtnGroup>
          <BtnSubmit title="add"/>
        </BtnGroup>

      </FormPost>
      
    </React.Fragment>
  )
}

export { Add };