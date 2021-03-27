import React, { useState } from 'react';
import { TextInput, TextArea, NumberInput, Submit } from '../../components/forms';

const AddForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e) => {

    e.preventDefault();

    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.field__content'));
    const collectedFields = {}

    fields.forEach((field) => {
      collectedFields[field.name] = field.value;      
    });  
    
    console.log(collectedFields);
    setIsSubmitted(true);

  }

  return ( 
    <form className="form" onSubmit={(e) => submitForm(e)}>
      <fieldset className="form__fieldset">
        <legend>add project</legend>
        <TextInput submitted={isSubmitted} inputTitle="title" placeholder="enter project's title"/>
        <TextInput submitted={isSubmitted} inputTitle="code" placeholder="enter project's code"/>
        <TextInput submitted={isSubmitted} inputTitle="author" placeholder="Last name, First name"/>
        <NumberInput submitted={isSubmitted} inputTitle="edition" placeholder="enter project's edition"/>
        <TextArea submitted={isSubmitted} inputTitle="notes" placeholder="notes..."/>
        <Submit label="add"/>
      </fieldset>
    </form>
   );
}
 
export default AddForm;