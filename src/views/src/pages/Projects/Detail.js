import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  return (
    <h3>project detail: {id}</h3>
  )
}

export { Detail }