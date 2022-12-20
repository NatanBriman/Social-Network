import { Navigate, useRoutes } from 'react-router-dom';
import AddPostPage from '../Pages/AddPost/AddPostPage';
import FeedPage from '../Pages/Feed/FeedPage';
import FriendsPage from '../Pages/Friends/FriendsPage';
import LoginPage from '../Pages/Login/LoginPage';
import { ADD_POST_ROUTE, FEED_ROUTE, FRIENDS_ROUTE, LOGIN_ROUTE } from '../Utils/Constants';
import LoginProtectedRoute from './LoginProtectedRoute';

const createRoute = (path, element, text, loginRequired = true) => {
  return { path, element, text, loginRequired };
};

const PAGES_ROUTES = [
  createRoute(FEED_ROUTE, <FeedPage />, 'Feed'),
  createRoute(FRIENDS_ROUTE, <FriendsPage />, 'Friends'),
  createRoute(ADD_POST_ROUTE, <AddPostPage />, 'Add Post'),
  createRoute(LOGIN_ROUTE, <LoginPage />, 'Login', false),
];

const SPECIAL_ROUTES = [
  createRoute('/', <Navigate to={LOGIN_ROUTE} />),
  createRoute('*', <Navigate to={LOGIN_ROUTE} />),
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
