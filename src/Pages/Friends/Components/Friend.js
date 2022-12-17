import { PersonRemove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../Components/UserCard';
import { userActions } from '../../../Redux/Features/User/UserSlice';
import { showToast } from '../../../Utils/Helpers';

const Friend = ({ friend }) => {
  const dispatch = useDispatch();

  const removeFriendFromCurrentUser = () => {
    const { removeFriend } = userActions;

    dispatch(removeFriend(friend));

    showToast(
      'success',
      <p>
        <em>{friend.username}</em> was removed successfully!
      </p>
    );
  };

  return (
    <UserCard user={friend}>
      <IconButton onClick={removeFriendFromCurrentUser}>
        <PersonRemove />
      </IconButton>
    </UserCard>
  );
};

export default Friend;
