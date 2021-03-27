import React from 'react';
import { ListItem } from './index';
import projects from './../../data/projects';

const List = () => {
  return (
    <section>
      <h3>projects list</h3>
      <ul>
        {projects.map((project) => (
          <ListItem key={project._id} item={project}/>
        ))}
      </ul>
    </section>
  )
}

export { List }