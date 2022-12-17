import { PersonAddAlt1 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/User/UserSlice';
import { removeObjectFromArrayById, showToast } from '../../../../Utils/Helpers';

const RecommendedFriend = ({ friend, setRecommendedFriends }) => {
  const dispatch = useDispatch();

  const addFriendToCurrentUser = () => {
    const { addFriend } = userActions;

    dispatch(addFriend(friend));
  };

  const removeFriendRecommendation = () =>
    setRecommendedFriends((recommendedFriends) =>
      removeObjectFromArrayById(recommendedFriends, friend)
    );

  const handleAddFriend = () => {
    addFriendToCurrentUser();
    removeFriendRecommendation();

    showToast(
      'success',
      <p>
        <em>{friend.username}</em> was added successfully!
      </p>
    );
  };

  return (
    <UserCard user={friend}>
      <IconButton onClick={handleAddFriend}>
        <PersonAddAlt1 />
      </IconButton>
    </UserCard>
  );
};

export default RecommendedFriend;
