import { createSlice } from '@reduxjs/toolkit';
import { initialUser, updateUserInLocalStorage } from './UserInLocalStorage';

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: { user: initialUser },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      state.user = user;
      updateUserInLocalStorage(state.user);
    },
    logout: (state) => {
      state.user = undefined;
      updateUserInLocalStorage(state.user);
    },
    addLikedPost: (state, action) => {
      const likedPostToAdd = action.payload;
      const updatedLikedPosts = [...state.user.likedPosts, likedPostToAdd];

      state.user.likedPosts = updatedLikedPosts;
      updateUserInLocalStorage(state.user);
    },
    removeLikedPost: (state, action) => {
      const likedPostToRemove = action.payload;
      const updatedLikedPosts = state.user.likedPosts.filter(
        (post) => post.id !== likedPostToRemove.id
      );

      state.user.likedPosts = updatedLikedPosts;
      updateUserInLocalStorage(state.user);
    },
    addFriend: (state, action) => {
      const friendToAdd = action.payload;
      const updatedFriends = [...state.user.friends, friendToAdd];

      state.user.friends = updatedFriends;
      updateUserInLocalStorage(state.user);
    },
    removeFriend: (state, action) => {
      const friendToRemove = action.payload;
      const updatedFriends = state.user.friends.filter((friend) => friend.id !== friendToRemove.id);

      state.user.friends = updatedFriends;
      updateUserInLocalStorage(state.user);
    },
  },
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user.user;

export default userSlice;
