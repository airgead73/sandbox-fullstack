import { 
  MilestonesAdd,
  MilestonesList,
  MilestonesDetail,
  MilestonesUpdate
 } from '../pages/Milestones';
import { PageNotFound } from '../pages/PageNotFound';

const routesMilestones = [
  {
    path: '/add',
    exact: true,
    main: () => <MilestonesAdd/>
  },
  {
    path: '/list',
    main: () => <MilestonesList/>
  },
  {
    path: '/:id/detail',
    main: () => <MilestonesDetail/>
  },  
  {
    path: '/:id/update',
    landing: () => <MilestonesUpdate/>
  },
  {
    path: '/*',
    main: () => <PageNotFound/>
  },     
 
];

export default routesMilestones;