import { createSlice } from '@reduxjs/toolkit';
import { filterByNotId, getExtendedArray } from '../../../Utils/Helpers';
import {
  initialUser,
  updateUserInAllUsersInLocalStorage,
  updateUserInLocalStorage,
} from './UserInLocalStorage';

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: { user: initialUser },
  reducers: {
    login: (state, action) => {
      const user = action.payload;

      state.user = user;
      updateUserInLocalStorage(state.user);
    },
    logout: (state) => {
      updateUserInAllUsersInLocalStorage(state.user);
      state.user = {};

      updateUserInLocalStorage(state.user);
    },
    addLikedPost: (state, action) => {
      const likedPostIdToAdd = action.payload;
      const updatedLikedPostsIds = getExtendedArray(state.user.likedPostsIds, likedPostIdToAdd);

      state.user.likedPostsIds = updatedLikedPostsIds;
      updateUserInLocalStorage(state.user);
    },
    removeLikedPost: (state, action) => {
      const likedPostIdToRemove = action.payload;
      const updatedLikedPostsIds = state.user.likedPostsIds.filter(
        (likedPostId) => likedPostId !== likedPostIdToRemove
      );

      state.user.likedPostsIds = updatedLikedPostsIds;
      updateUserInLocalStorage(state.user);
    },
    addFriend: (state, action) => {
      const friendToAdd = action.payload;
      const updatedFriends = getExtendedArray(state.user.friends, friendToAdd);

      state.user.friends = updatedFriends;
      updateUserInLocalStorage(state.user);
    },
    removeFriend: (state, action) => {
      const friendToRemove = action.payload;
      const updatedFriends = filterByNotId(state.user.friends, friendToRemove.id);

      state.user.friends = updatedFriends;
      updateUserInLocalStorage(state.user);
    },
    addRecommendedFriend: (state, action) => {
      const recommendedFriend = action.payload;
      const updatedRecommendedFriends = getExtendedArray(
        state.user.recommendedFriends,
        recommendedFriend
      );

      state.user.recommendedFriends = updatedRecommendedFriends;
      updateUserInLocalStorage(state.user);
    },
    removeRecommendedFriend: (state, action) => {
      const recommendedFriendToRemove = action.payload;
      const updatedRecommendedFriends = filterByNotId(
        state.user.recommendedFriends,
        recommendedFriendToRemove.id
      );

      state.user.recommendedFriends = updatedRecommendedFriends;
      updateUserInLocalStorage(state.user);
    },
  },
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user.user;

export default userSlice;
