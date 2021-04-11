import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { BtnDelete } from './../../../components/forms';

const Tbody = ({items}) => {
  const { url } = useRouteMatch();
  return ( 
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          <td>
            <Link to={`${url}/${item._id}/detail`}>{item.title}</Link>
            
          </td>
          <td>{item.mode}</td>
          <td>{item.material}</td>
          <td>{item.category}</td>
          <td>
            <BtnDelete endpoint={`/api/projects/${item._id}`}>
              delete
            </BtnDelete>
          </td>
        </tr>
      ))}
    </tbody>
   );
}
 
export default Tbody;