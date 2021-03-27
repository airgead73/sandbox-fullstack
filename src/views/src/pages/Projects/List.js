import React, { useState, useEffect } from 'react';
import { ListItem } from './index';
import projects from './../../data/projects';
import useFetch from '../../fetch/useFetch';

const List = () => {

  const { data: projects, isLoading, error } = useFetch('/api/projects');

  return (
    
    <section>
      <h3>projects list</h3>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {projects && <ul>
        {projects.map((project) => (
          <ListItem key={project._id} item={project}/>
        ))}
      </ul>}
    </section>
  )
}

export { List }