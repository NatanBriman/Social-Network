import { LOCAL_STORAGE_KEYS } from '../../../Utils/Constants';

export const userInLocalStorage = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEYS.connectedUser)
);

if (!userInLocalStorage) localStorage.setItem(LOCAL_STORAGE_KEYS.connectedUser, JSON.stringify({}));

export const updateUserInLocalStorage = (user) =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.connectedUser, JSON.stringify(user));

export const updateUserInAllUsersInLocalStorage = (userToUpdate) => {
  const allUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.users));

  const usersWithoutUserToUpdate = allUsers.filter((user) => user.id !== userToUpdate.id);
  const updatedUsers = [...usersWithoutUserToUpdate, userToUpdate];

  localStorage.setItem(LOCAL_STORAGE_KEYS.users, JSON.stringify(updatedUsers));
};

export const initialUser = userInLocalStorage || {};
