import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './../../fetch/useFetch';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
  InputText,
  InputNumber,
  TextArea 
} from './../../components/forms';

const Update = () => {
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`/api/projects/${id}`);  
  console.log(id);
  console.log(item)
  return ( 
    <React.Fragment>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      
      {item && 
      <FormPost
        method="PUT"
        action={`/api/projects/${id}`}
        target="/projects"
        enctype="application/json"
        title={`Update ${item.title}`}    
      >
        <FieldGroup>
          <InputText title="title" defaultValue={item.title}/>
          <InputText title="author" defaultValue={item.author}/>           
        </FieldGroup>
        <FieldGroup>
          <InputText title="code" defaultValue={item.code}/>
          <InputNumber title="edition" defaultValue={item.edition}/>
          <InputText title="client" defaultValue={item.client}/>
        </FieldGroup>        
        <FieldGroup>
          <TextArea title="notes" defaultValue={item.notes}/>                                                
        </FieldGroup>  
        <BtnGroup>
        <BtnSubmit title="update"/>
      </BtnGroup>      
      </FormPost>
  }
    </React.Fragment>
   );
}
 
export default Update;