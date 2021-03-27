import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  return (
    <h3>update project: {id}</h3>
  )
}

export { Update }