import e from 'express';
import React, { useState } from 'react';

const ProjectsAdd = () => {

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [edition, setEdition] = useState('');
  const [client, setClient] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log('form submitted');
  }

  return ( 
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="form__title">add project</legend>

      <label className="form__input">
        title
        <input 
          type="text" 
          name="title" 
          id="title"
          className="form__field" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder=""
        />
      </label>
      <label className="form__input">
        code
        <input 
          type="text" 
          name="code" 
          id="code" 
          className="form__field"
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder=""
        />
      </label>
      <label className="form__input">
        edition
        <input 
          type="number" 
          name="edition" 
          id="edition"
          className="form__field" 
          value={edition} 
          onChange={(e) => setEdition(e.target.value)} 
          placeholder=""
        />
      </label>
      <label className="form__input">
        client
        <input 
          type="text" 
          name="client" 
          id="client"
          className="form__field" 
          value={client} 
          onChange={(e) => setClient(e.target.value)} 
          placeholder=""
        />
      </label>
      <label className="form__input">
        author
        <input 
          type="text" 
          name="author" 
          id="author"
          className="form__field" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Last name, first name"
        />
      </label>
      <label className="form__input">
        notes
        <textarea 
          name="notes" 
          id="notes"
          className="form__field"
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
          placeholder="Notes..."          
        >
        </textarea>
      </label>  
      <button type="submit">add</button>    
      </fieldset>
    </form>
   );
}
 
export default ProjectsAdd;