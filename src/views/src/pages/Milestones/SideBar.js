import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const milestones = [
  {
    _id: 1,
    title: "Othello",
    due: "March 15"
  },
  {
    _id: 2,
    title: "Casino Royale",
    due: "March 25"
  }, 
  {
    _id: 3,
    title: "Dubliners",
    due: "March 24"
  },   
];

const SideBar = () => {

  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <h4>milestones sidebar</h4>
      <ul>
        <li><Link to={`${url}/add`}>add a milestone</Link></li>
        <li><Link to={`${url}/list`}>review milestones</Link></li>
      </ul>
      <h5>current milestones</h5>
        <ul>
          {milestones.map((milestone) => (<li key={milestone._id}><Link to={`${url}/detail/${milestone._id}`}>{milestone.title} <small>({milestone.due})</small></Link></li>))}
        </ul>
    </React.Fragment> 
   );
}
 
export default SideBar;