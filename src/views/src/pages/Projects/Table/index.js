import TableContainer from './TableContainer';
import Thead from './Thead';
import {useGet} from './../../../hooks';
import React from 'react';
import Tbody from './Tbody';

const headings = [
  {
    id: 1,
    text: 'title',
    width: "25%"
  },
  {
    id: 2,
    text: 'mode',
    width: "25%"
  },  
  {
    id: 3,
    text: 'material',
    width: "25%"
  },
  {
    id: 4,
    text: 'category',
    width: "25%"
  },    
];

const Table = () => {
  const { data: projects, isLoading, error } = useGet('/api/projects?sort=title');
  return ( 
    <React.Fragment>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {projects && (
        <TableContainer title="project table" headings={headings}>
        <Thead headings={headings}/>
        <Tbody items={projects}/>
        </TableContainer>
        )}
    </React.Fragment>
   );
}
 
export default Table;