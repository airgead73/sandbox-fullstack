import TableContainer from './TableContainer';
import Thead from './Thead';
import {useGet} from './../../../hooks';
import React from 'react';
import Tbody from './Tbody';

const headings = [
  {
    id: 1,
    text: 'title',
    width: "20%",
    colspan: "1"
  },
  {
    id: 2,
    text: 'mode',
    width: "20%",
    colspan: "1"
  },  
  {
    id: 3,
    text: 'material',
    width: "20%",
    colspan: "1"
  },
  {
    id: 4,
    text: 'category',
    width: "40%",
    colspan: "2"
  },    
];

const Table = () => {
  const { data: projects } = useGet('/api/projects?sort=title');
  return ( 
    <React.Fragment>
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