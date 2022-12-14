import { createSlice } from '@reduxjs/toolkit';
import User from '../../Models/User/User';

const INITIAL_USER = new User(
  'Natan Briman',
  'PASSWORD',
  'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go'
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
