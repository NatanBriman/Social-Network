import { createContext } from 'react';

const SelectedFriendContext = createContext({});

export const SelectedFriendProvider = SelectedFriendContext.Provider;

export default SelectedFriendContext;
