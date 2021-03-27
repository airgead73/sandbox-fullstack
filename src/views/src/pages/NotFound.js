import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const NotFound = () => {
  const { url } = useRouteMatch();
  return (
    <h3>{url} page not found</h3>
  )
}

export default NotFound;