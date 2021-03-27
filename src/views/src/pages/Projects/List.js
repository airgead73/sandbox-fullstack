import React from 'react';
import { ListItem } from './index';
import useGet from '../../fetch/useGet';

const List = () => {

  const { data: projects, isLoading, error } = useGet('/api/projects');

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