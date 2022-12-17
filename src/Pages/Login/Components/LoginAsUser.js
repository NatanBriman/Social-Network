import { Login } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import UserCard from '../../../Components/UserCard';

const LoginAsUser = ({ user }) => {
  const handleLogin = (user) => {};

  return (
    <UserCard user={user}>
      <IconButton onClick={() => handleLogin(user)}>
        <Login />
      </IconButton>
    </UserCard>
  );
};

export default LoginAsUser;
