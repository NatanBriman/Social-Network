import { Navigate, useRoutes } from 'react-router-dom';
import AddPostPage from '../Pages/AddPost/AddPostPage';
import FeedPage from '../Pages/Feed/FeedPage';
import FriendsPage from '../Pages/Friends/FriendsPage';
import LoginPage from '../Pages/Login/LoginPage';
import { ADD_POST_ROUTE, FEED_ROUTE, FRIENDS_ROUTE, LOGIN_ROUTE } from '../Utils/Constants';
import LoginProtectedRoute from './LoginProtectedRoute';

const PAGES_ROUTES = [
  {
    path: FEED_ROUTE,
    element: <FeedPage />,
    text: 'Feed',
    loginRequired: true,
  },
  {
    path: FRIENDS_ROUTE,
    element: <FriendsPage />,
    text: 'Friends',
    loginRequired: true,
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
    text: 'Login',
    loginRequired: false,
  },
  {
    path: ADD_POST_ROUTE,
    element: <AddPostPage />,
    text: 'Add Post',
    loginRequired: true,
  },
];

const SPECIAL_ROUTES = [
  { path: '/', element: <Navigate to={LOGIN_ROUTE} /> },
  { path: '*', element: <Navigate to={LOGIN_ROUTE} /> },
];

const protectRoutes = (routes, propertyToProtectBy, ProtectedRoute) =>
  routes.map((route) => {
    return {
      ...route,
      element: route[propertyToProtectBy] ? (
        <ProtectedRoute>{route.element}</ProtectedRoute>
      ) : (
        route.element
      ),
    };
  });

export const loginRequiredRoutes = PAGES_ROUTES.filter((route) => route.loginRequired);

const RouterView = () => {
  const loginProtectedRoutes = protectRoutes(PAGES_ROUTES, 'loginRequired', LoginProtectedRoute);
  const routes = useRoutes([...loginProtectedRoutes, ...SPECIAL_ROUTES]);

  return routes;
};

export default RouterView;
