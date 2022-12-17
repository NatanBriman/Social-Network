import { LOCAL_STORAGE_KEYS, USERS } from '../../../Utils/Constants';

const DEFAULT_USER = USERS[0];
export const userInLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.user));

if (!userInLocalStorage)
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(DEFAULT_USER));

export const updateUserInLocalStorage = (user) =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(user));

export const initialUser = userInLocalStorage || DEFAULT_USER;
