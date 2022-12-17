import { POSTS, USERS } from '../Utils/Constants';

const API_REQUEST_DELAY = 0;

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
