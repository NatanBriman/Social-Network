import { BsCartFill } from 'react-icons/bs';
import { IoStorefrontSharp } from 'react-icons/io5';
import FeedPage from '../Pages/Feed/FeedPage';
import FriendsPage from '../Pages/Friends/FriendsPage';

export const FEED_ROUTE = '/feed';
export const FRIENDS_ROUTE = '/friends';

export const ROUTES = [
  {
    path: FEED_ROUTE,
    element: <FeedPage />,
    text: 'Feed',
    icon: <IoStorefrontSharp style={{ height: '100%', width: '100%' }} />,
  },
  {
    path: FRIENDS_ROUTE,
    element: <FriendsPage />,
    text: 'Friends',
    icon: <BsCartFill style={{ height: '100%', width: '100%' }} />,
  },
];
