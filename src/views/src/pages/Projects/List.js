import React, { useState, useEffect } from 'react';
import { ListItem } from './index';
import projects from './../../data/projects';
import { useAuth0 } from '@auth0/auth0-react';

const List = () => {

  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {

      console.log('api called')
      const token = await getAccessTokenSilently();

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL_DEV}/api/projects`, {
        headers: {
          Authorization: `Bearer ${token}`
        }        
      });

      const responseData = await response.json();

      console.log(responseData);

      const { success, message, results } = responseData;

      if(!success) {
        console.log(message);
        setError(message);
        setIsLoading(false);
      }

      setProjects(results);
      setIsLoading(false);

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {

    callApi();

  },[]);

  if(isLoading) {
    return <div>loading...</div>
  }

  return (
    
    <section>
      <h3>projects list</h3>
      {error && <p>{error}</p>}
      {projects && <ul>
        {projects.map((project) => (
          <ListItem key={project._id} item={project}/>
        ))}
      </ul>}
    </section>
  )
}

export { List }