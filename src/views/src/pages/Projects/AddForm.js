import React, { useState } from 'react';

const AddForm = () => {

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [client, setClient] = useState('');
  const [edition, setEdition] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');

  const submitProject = (e) => {

    e.preventDefault();

    const project = {
      title,
      code,
      client,
      edition,
      author,
      notes
    };

    console.log(project);

  }

  return (
    <form className="form" id="project__add" onSubmit={(e) => submitProject(e)}>
      <fieldset className="form__fieldset">
        <legend className="form__title">add project</legend>
        <label htmlFor="" className="input input--text">
          <span className="input__title">title</span>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="add title" 
            autoComplete="off" 
            id="title" 
            className="input__field"
          />
        </label> 
        <label htmlFor="" className="input">
          <span className="input__title">code</span>
          <input 
            type="text" 
            name="code" 
            value={code} 
            onChange={(e) => setCode(e.target.value)}  
            placeholder="code for project" 
            autoComplete="off" 
            id="code" 
            className="input__field"
          />
        </label> 
        <label htmlFor="" className="input input--number">
          <span className="input__title">edition</span>
          <input 
            type="number" 
            name="edition" 
            value={edition} 
            onChange={(e) => setEdition(e.target.value)}  
            autoComplete="off" 
            id="edition" 
            className="input__field"
          />
        </label> 
        <label htmlFor="" className="input input--text">
          <span className="input__title">client</span>
          <input 
            type="text" 
            name="client" 
            value={client} 
            onChange={(e) => setClient(e.target.value)}  
            placeholder="project's client" 
            autoComplete="off" 
            id="client" 
            className="input__field"
          />
        </label> 
        <label htmlFor="" className="input input--title">
          <span className="input__title">author</span>
          <input 
            type="text" 
            name="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder="project's author" 
            autoComplete="off" 
            id="author" 
            className="input__field"
          />
        </label> 
        <label htmlFor="" className="input input--textarea">
          <span className="input__title">notes</span>
          <textarea 
            type="text" 
            name="" 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}  
            placeholder="notes..." 
            autoComplete="off" 
            id="notes" 
            className="input__field"
          ></textarea>
        </label>    
        <button className="form__submit" type="submit" htmlFor="project__add">
          add
        </button>                                     
      </fieldset>
    </form>
  )
}

export { AddForm };