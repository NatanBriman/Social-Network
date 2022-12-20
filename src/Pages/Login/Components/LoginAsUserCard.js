import { Login } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../../Components/UserCard';
import { userActions } from '../../../Redux/Features/User/UserSlice';
import { FEED_ROUTE } from '../../../Utils/Constants';

const LoginAsUserCard = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (user) => {
    const { login } = userActions;

    dispatch(login(user));
    navigate(FEED_ROUTE);
  };

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

export default LoginAsUserCard;
