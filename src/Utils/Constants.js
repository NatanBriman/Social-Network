import FeedPage from '../Pages/Feed/FeedPage';
import FriendsPage from '../Pages/Friends/FriendsPage';
import LoginPage from '../Pages/Login/LoginPage';

export const FEED_ROUTE = '/feed';
export const FRIENDS_ROUTE = '/friends';
export const LOGIN_ROUTE = '/login';

export const ROUTES = [
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
    loginRequired: true,
    // TODO: Make false!
  },
];

export const USERS = [
  {
    id: '9ec814af-06d4-3da7-224b-13034af898c5',
    username: 'Natan Briman',
    password: 'PASSWORD',
    image:
      'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
    friends: [],
    likedPostsIds: [],
    joinedDate: Date.now(),
    recommendedFriends: [
      {
        id: 2,
        username: 'Rotem Avraham',
        image:
          'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 3,
        username: 'Maayan Razi',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
      },
      {
        id: 4,
        username: 'Ruti Sinay',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
      },
    ],
  },
  {
    id: 2,
    username: 'Rotem Avraham',
    likedPostsIds: [],
    friends: [],
    joinedDate: Date.now(),
    password: 'PASSWORD',
    recommendedFriends: [
      {
        id: '9ec814af-06d4-3da7-224b-13034af898c5',
        username: 'Natan Briman',
        image:
          'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
      },
      {
        id: 3,
        username: 'Maayan Razi',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
      },
      {
        id: 4,
        username: 'Ruti Sinay',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
      },
    ],
    image:
      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    username: 'Maayan Razi',
    likedPostsIds: [],
    friends: [],
    password: 'PASSWORD',
    joinedDate: Date.now(),
    recommendedFriends: [
      {
        id: '9ec814af-06d4-3da7-224b-13034af898c5',
        username: 'Natan Briman',
        image:
          'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
      },
      {
        id: 2,
        username: 'Rotem Avraham',
        image:
          'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 4,
        username: 'Ruti Sinay',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
      },
    ],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
  },
  {
    id: 4,
    username: 'Ruti Sinay',
    likedPostsIds: [],
    friends: [],
    joinedDate: Date.now(),
    password: 'PASSWORD',
    recommendedFriends: [
      {
        id: '9ec814af-06d4-3da7-224b-13034af898c5',
        username: 'Natan Briman',
        image:
          'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
      },
      {
        id: 2,
        username: 'Rotem Avraham',
        image:
          'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 3,
        username: 'Maayan Razi',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
      },
    ],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
  },
];

export const INITIAL_RECOMMENDED_FRIENDS = USERS.map(({ id, username, image }) => {
  return { id, username, image };
});

export const POSTS = [
  {
    id: 'bc050084-fa9b-19c9-a16b-9e5b8277bab1',
    author: {
      id: 1,
      username: 'Example Name',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    date: new Date(),
    image:
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
    description: 'This is the description...',
  },
  {
    id: 'bc050054-fa9b-19c9-a16b-9e5b8277bab1',
    author: {
      id: 1,
      username: 'Example Name',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    date: new Date(),
    image:
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
    description: 'This is the description...',
  },
  {
    id: 'bc052084-fa9b-19c9-a16b-9e5b8277bab1',
    author: {
      id: 1,
      username: 'Example Name',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    date: new Date(),
    image:
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
    description: 'This is the description...',
  },
  {
    id: 'bc150084-fa9b-19c9-a16b-9e5b8277bab1',
    author: {
      id: 1,
      username: 'Example Name',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    date: new Date(),
    image:
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
    description: 'This is the description...',
  },
];

export const LOCAL_STORAGE_KEYS = {
  posts: 'POSTS',
  recommendedFriends: 'RECOMMENDED_FRIENDS',
  user: 'USER',
};
