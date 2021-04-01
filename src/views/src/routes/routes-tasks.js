import { 
  TasksAdd,
  TasksList,
  TasksDetail,
  TasksUpdate
 } from '../pages/Photos';
import { PageNotFound } from './../pages/PageNotFound';

const routesTasks = [
  {
    path: '/add',
    exact: true,
    main: () => <TasksAdd/>
  },
  {
    path: '/list',
    main: () => <TasksList/>
  },
  {
    path: '/:id/detail',
    main: () => <TasksDetail/>
  },  
  {
    path: '/:id/update',
    landing: () => <TasksUpdate/>
  },
  {
    path: '/*',
    main: () => <PageNotFound/>
  },     
 
];

export default routesTasks;