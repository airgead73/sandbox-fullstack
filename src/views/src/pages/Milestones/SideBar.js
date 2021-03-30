import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const projects = [
  {
    _id: 1,
    title: "Othello",
    author: "William Shakespeare"
  },
  {
    _id: 2,
    title: "Casino Royale",
    author: "Ian Fleming"
  }, 
  {
    _id: 3,
    title: "Dubliners",
    author: "James Joyce"
  },   
]


const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>projects sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a project</Link></li>
        <li><Link to={`${url}/list`}>review projects</Link></li>
      </ul>
      <h5>current projects</h5>
        <ul>
          {projects.map((project) => (<li key={project._id}><Link to={`${url}/detail/${project._id}`}>{project.title}</Link></li>))}
        </ul>
    </React.Fragment> 
   );
}
 
export default SideBar;