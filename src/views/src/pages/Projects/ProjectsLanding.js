import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const ProjectsLanding = () => {

  const { url, path } = useRouteMatch();
  console.log({
    projects_url: url,
    projects_path: path
  });

  return ( 
    <h2>projects page</h2>
   );
}

export default ProjectsLanding;