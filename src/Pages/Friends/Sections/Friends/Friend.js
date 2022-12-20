import { PersonRemove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/User/UserSlice';
import { showToast } from '../../../../Utils/Helpers';

const Friend = ({ friend }) => {
  const dispatch = useDispatch();

  const removeFriendFromCurrentUser = (friend) => {
    const { removeFriend } = userActions;

    dispatch(removeFriend(friend));
  };

  const addFriendRecommendation = (friend) => {
    const { addRecommendedFriend } = userActions;

    dispatch(addRecommendedFriend(friend));
  };

  const handleRemoveFriend = (friend) => {
    removeFriendFromCurrentUser(friend);
    addFriendRecommendation(friend);

    showToast(`${friend.username} is no longer your friend!`);
  };

  return (
    <UserCard user={friend} isRow>
      <IconButton onClick={() => handleRemoveFriend(friend)}>
        <PersonRemove />
      </IconButton>
    </UserCard>
  );
};

export default Friend;
