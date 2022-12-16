import { INITIAL_RECOMMENDED_FRIENDS, POSTS } from '../Utils/Constants';

const API_REQUEST_DELAY = 20000;

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
  recommendedFriends: {
    async getAllRecommendedFriends() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(INITIAL_RECOMMENDED_FRIENDS);
        }, API_REQUEST_DELAY);
      });
    },
  },
};

export default api;
