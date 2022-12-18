import { PersonAddAlt1 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/User/UserSlice';
import { showToast } from '../../../../Utils/Helpers';

const RecommendedFriend = ({ friend }) => {
  const dispatch = useDispatch();

  const addFriendToCurrentUser = (friend) => {
    const { addFriend } = userActions;

    dispatch(addFriend(friend));
  };

  const removeFriendRecommendation = (friend) => {
    const { removeRecommendedFriend } = userActions;

    dispatch(removeRecommendedFriend(friend));
  };

  const handleAddFriend = (friend) => {
    addFriendToCurrentUser(friend);
    removeFriendRecommendation(friend);
    console.log(friend.username);
    showToast(
      <p>
        <em>{friend.username}</em> was added successfully!
      </p>
    );
  };

  return (
    <UserCard user={friend} isRow>
      <IconButton onClick={() => handleAddFriend(friend)}>
        <PersonAddAlt1 />
      </IconButton>
    </UserCard>
  );
};

export default RecommendedFriend;
