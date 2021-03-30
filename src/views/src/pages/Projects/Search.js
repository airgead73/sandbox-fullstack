import React, { useState } from 'react';
import useGet from '../../fetch/useGet';
import { ListItem } from './index';
import { InputText, InputNumber, BtnSubmit, FieldGroup, BtnGroup } from './../../components/forms';
import { set } from 'mongoose';

const Search = () => {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //const { data: projects, isLoading, error } = useGet('/api/projects');

  const getQueryString = (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.input__field'));
    const path = '/api/projects';
    let queryString = '?';

    fields.forEach((field) => {
      if(!field.value) return;
      let key = field.name;
      let value = field.value; 
      key = key.toLowerCase();
      value = value.toLowerCase();
      const querySegment = `${key}=${value}&`;
      queryString = queryString + querySegment;
    });

    queryString = (path + queryString).slice(0, -1);

    console.log(queryString);

  }

  return (
    
    <section>
      <h3>projects Search</h3>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <section>
        <form onSubmit={getQueryString}>
        <FieldGroup>
        <InputText
            title="client"
          />
          <InputNumber
            title="edition"
          />           
        </FieldGroup>
        <BtnGroup>
          <BtnSubmit title="search"/>
        </BtnGroup>        
        </form>
      </section>
      {projects && <ul>
        {projects.map((project) => (
          <ListItem key={project._id} item={project}/>
        ))}
      </ul>}
    </section>
  )
}

export {Search}