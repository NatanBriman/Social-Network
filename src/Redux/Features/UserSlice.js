import { createSlice } from '@reduxjs/toolkit';
import User from '../../Models/User';

const INITIAL_USER = new User(
  'Natan Briman',
  'PASSWORD',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fnatanbriman&psig=AOvVaw3MRz_yiGCcc6AOCHcmLMdS&ust=1671007573096000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjz47ia9vsCFQAAAAAdAAAAABAE'
);

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    user: INITIAL_USER,
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      state.user = user;
    },
    logout: (state) => {
      state.user = undefined;
    },
    addLikedPost: (state, action) => {
      const likedPostToAdd = action.payload;

      state.user.addLikedPost(likedPostToAdd);
    },
    removeLikedPost: (state, action) => {
      const likedPostToRemove = action.payload;

      state.user.removeLikedPost(likedPostToRemove);
    },
    addFriend: (state, action) => {
      const friendToAdd = action.payload;

      state.user.addFriend(friendToAdd);
    },
    removeFriend: (state, action) => {
      const friendToRemove = action.payload;

      state.user.removeFriend(friendToRemove);
    },
  },
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user.user;

export default userSlice;
