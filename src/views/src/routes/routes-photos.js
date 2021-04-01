import { 
  PhotosAdd,
  PhotosList,
  PhotosDetail,
  PhotosUpdate
 } from '../pages/Photos';
import { PageNotFound } from '../pages/PageNotFound';

const routesPhotos = [
  {
    path: '/add',
    exact: true,
    main: () => <PhotosAdd/>
  },
  {
    path: '/list',
    main: () => <PhotosList/>
  },
  {
    path: '/:id/detail',
    main: () => <PhotosDetail/>
  },  
  {
    path: '/:id/update',
    landing: () => <PhotosUpdate/>
  },
  {
    path: '/*',
    main: () => <PageNotFound/>
  },     
 
];

export default routesPhotos;