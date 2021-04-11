import React from 'react';

const Thead = ({headings}) => {
  return ( 
    <thead>
      <tr>
      {headings.map((heading) => (
        <th 
          key={heading.id}
          width={heading.width}
          colSpan={heading.colspan}
        >
          {heading.text}
        </th>
      ))}
      </tr>
    </thead>
   );
}
 
export default Thead;