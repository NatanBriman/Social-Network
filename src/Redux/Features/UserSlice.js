import { createSlice } from '@reduxjs/toolkit';

const INITIAL_USER = {
  id: '9ec814af-06d4-3da7-224b-13034af898c5',
  username: 'Natan Briman',
  password: 'PASSWORD',
  image:
    'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
  friends: [],
  likedPosts: [],
  joinedDate: Date.now(),
};

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
      const updatedLikedPosts = [...state.user.likedPosts, likedPostToAdd];

      state.user.likedPosts = updatedLikedPosts;
    },
    removeLikedPost: (state, action) => {
      const likedPostToRemove = action.payload;
      const updatedLikedPosts = state.user.likedPosts.filter(
        (post) => post.id !== likedPostToRemove.id
      );

      state.user.likedPosts = updatedLikedPosts;
    },
    addFriend: (state, action) => {
      const friendToAdd = action.payload;
      const updatedFriends = [...state.user.friends, friendToAdd];

      state.user.friends = updatedFriends;
    },
    removeFriend: (state, action) => {
      const friendToRemove = action.payload;
      const updatedFriends = state.user.friends.filter((friend) => friend.id !== friendToRemove.id);

      state.user.friends = updatedFriends;
    },
  },
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user.user;

export default userSlice;
