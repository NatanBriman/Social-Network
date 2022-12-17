import { LOCAL_STORAGE_KEYS } from '../../../Utils/Constants';

const DEFAULT_USER = {
  id: '9ec814af-06d4-3da7-224b-13034af898c5',
  username: 'Natan Briman',
  password: 'PASSWORD',
  image:
    'https://media-exp1.licdn.com/dms/image/D4E35AQGK4ozVskWbmQ/profile-framedphoto-shrink_400_400/0/1634383529380?e=1671530400&v=beta&t=Njg5YE0g3yo3455OUIiyQ6-akjBHjPN8VPWr0g5v5go',
  friends: [],
  likedPostsIds: [],
  joinedDate: Date.now(),
};

export const userInLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.user));

if (!userInLocalStorage)
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(DEFAULT_USER));

export const updateUserInLocalStorage = (user) =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(user));

export const initialUser = userInLocalStorage || DEFAULT_USER;
