import React from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();
  const { location } = history;
  console.log('home location:', location)
  return ( 
    <h1>
      home page
      <button onClick={() => history.push('/projects')}>projects</button>
    </h1>

   );
}
 
export default Landing;