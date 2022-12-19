import uuid from 'react-uuid';
import { createPost } from '../Pages/AddPost/AddPostPage';

const getRecommendedFriends = (userId) => {
  const otherUsers = USERS.filter((recommendedUser) => recommendedUser.id !== userId);

  const usersDTO = otherUsers.map(({ id, username, image }) => {
    return { id, username, image };
  });

  return usersDTO;
};
const addRecommendedFriends = (user) => (user.recommendedFriends = getRecommendedFriends(user.id));

const createUser = (username, password, image) => {
  return {
    id: uuid(),
    username,
    password,
    image,
    friends: [],
    likedPostsIds: [],
    joinedDate: Date.now(),
  };
};

const USERS = [
  createUser(
    'Natan Briman',
    'Natan Password',
    'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go'
  ),

  createUser(
    'Rotem Avraham',
    'Rotem Password',
    'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
  ),
  createUser(
    'Maayan Razi',
    'Maayan Password',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU'
  ),
  createUser(
    'Ruti Sinay',
    'Ruti Password',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU'
  ),
];
USERS.map(addRecommendedFriends);

const POSTS = [
  createPost(
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    'Test 1',
    'Description test',
    'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg'
  ),
];

const API_REQUEST_DELAY = 2000;

const api = {
  posts: {
    async getAllPosts() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(POSTS);
        }, API_REQUEST_DELAY);
      });
    },
  },
  users: {
    async getAllUsers() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(USERS);
        }, API_REQUEST_DELAY);
      });
    },
  },
};

export default api;
