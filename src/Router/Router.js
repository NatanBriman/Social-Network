import { Navigate, useRoutes } from 'react-router-dom';
import { FEED_ROUTE, ROUTES } from '../Utils/Constants';

const SPECIAL_ROUTES = [
  { path: '/', element: <Navigate to={FEED_ROUTE} /> },
  { path: '*', element: <Navigate to={FEED_ROUTE} /> },
];

const RouterView = () => {
  const routes = useRoutes([...ROUTES, ...SPECIAL_ROUTES]);

  return routes;
};

export default RouterView;
