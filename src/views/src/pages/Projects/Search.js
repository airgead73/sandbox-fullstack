import React, { useState } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';
import { InputText, BtnSubmit, FieldGroup, BtnGroup } from './../../components/forms';
import { List } from '.';

const Search = (props) => {
  const [endpoint, setEndpoint] = useState(props.initial);
  const path = props.initial;

  const getQueryString = (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.input__field'));    

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
    setEndpoint(queryString)

  }

  return (
    
    <section>
      <h4>products search</h4>
      <form onSubmit={getQueryString}>
        <fieldset>
          <legend>search projects</legend>
          <FieldGroup>
        <InputText
            title="client"
          />          
        </FieldGroup>   
        <BtnGroup>
          <BtnSubmit title="search"/>
        </BtnGroup>               
        </fieldset>

      </form>
      <List endpoint={endpoint}/>
    </section>
  )
}

export {Search}