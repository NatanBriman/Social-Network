import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../Components/UserCard';
import { userActions } from '../../../Redux/Features/UserSlice';
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
        <PersonRemoveIcon />
      </IconButton>
    </UserCard>
  );
};

export default Friend;
