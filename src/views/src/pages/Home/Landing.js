import React from 'react';
import { PostForm, TextInput, TextArea, NumberInput, Submit } from '../../components/forms';

const Landing = (props) => {
  return ( 
    <React.Fragment>
      <h2>home page</h2>
      <PostForm endpoint="/api/projects">
      <fieldset className="form__fieldset">
        <legend>add project</legend>
        <TextInput inputTitle="title" placeholder="enter project's title"/>
        <TextInput inputTitle="code" placeholder="enter project's code"/>
        <TextInput inputTitle="author" placeholder="Last name, First name"/>
        <NumberInput inputTitle="edition" placeholder="enter project's edition"/>
        <TextInput inputTitle="client" placeholder="enter project's client"/>
        <TextArea inputTitle="notes" placeholder="notes..."/>
        <Submit label="add"/>
      </fieldset>        
      </PostForm>
    </React.Fragment>
   );
}
 
export default Landing;