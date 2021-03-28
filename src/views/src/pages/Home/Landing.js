import React from 'react';
import { PostForm, TextInput, TextArea, NumberInput, Submit } from '../../components/forms';

const Landing = (props) => {
  return ( 
    <React.Fragment>
      <h2>home page</h2>
      <PostForm endpoint="/api/projects" status={props.status}>
      <fieldset className="form__fieldset">
        <legend>add project</legend>
        <TextInput status={props.status} inputTitle="title" placeholder="enter project's title"/>
        <TextInput status={props.status} inputTitle="code" placeholder="enter project's code"/>
        <TextInput status={props.status} inputTitle="author" placeholder="Last name, First name"/>
        <NumberInput status={props.status} inputTitle="edition" placeholder="enter project's edition"/>
        <TextInput status={props.status} inputTitle="client" placeholder="enter project's client"/>
        <TextArea status={props.status} inputTitle="notes" placeholder="notes..."/>
        <Submit label="add"/>
      </fieldset>        
      </PostForm>
    </React.Fragment>
   );
}
 
export default Landing;