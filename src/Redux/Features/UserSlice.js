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
      state.user = {};
    },
    addFavoriteProduct: (state, action) => {
      const product = action.payload;

      state.user.favoriteProducts.push(product);
    },
    removeFavoriteProduct: (state, action) => {
      const product = action.payload;

      const updatedFavoriteProducts = state.user.favoriteProducts.filter(
        (favoriteProduct) => favoriteProduct._id !== product._id
      );

      const updatedUser = {
        ...state.user,
        favoriteProducts: updatedFavoriteProducts,
      };

      state.user = updatedUser;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
