import React from 'react';
import { useParams } from 'react-router-dom';
import { useLayout } from './../../layout';
import useFetch from './../../fetch/useFetch';
import {   
  FormPost, 
  FieldGroup,
  BtnGroup,
  BtnSubmit,
  InputText,
  TextArea 
} from './../../components/forms';

const Update = () => {
  useLayout('update');
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`/api/projects/${id}`);  

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
          <InputText title="mode" defaultValue={item.mode}/>           
        </FieldGroup>
        <FieldGroup>
          <InputText title="material" defaultValue={item.material}/>
          <InputText title="category" defaultValue={item.category}/>
        </FieldGroup>        
        <FieldGroup>
          <TextArea title="desc" defaultValue={item.desc}/> 
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