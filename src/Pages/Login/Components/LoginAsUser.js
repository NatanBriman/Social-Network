import { Login } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import UserCard from '../../../Components/UserCard';

const LoginAsUser = ({ user }) => {
  const handleLogin = (user) => {};

  return (
    <UserCard
      user={user}
      cardStyle={{ height: '16em', width: '12em' }}
      avatarStyle={{ height: '5em', width: '5em' }}
      cardClasses='login-user'
    >
      <IconButton color='primary' onClick={() => handleLogin(user)}>
        <Login />
      </IconButton>
    </UserCard>
  );
};

export default LoginAsUser;
