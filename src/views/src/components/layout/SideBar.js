import React from 'react';

const SideBar = (props) => {
  return (  
    <aside className="sidebar">
      <section className="sidebar__content">
        <h4>{props.title}</h4>
        {props.children}
      </section>

    </aside>
   );
}
 
export default SideBar;