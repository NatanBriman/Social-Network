import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/UserSlice';
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
        <PersonAddAlt1Icon />
      </IconButton>
    </UserCard>
  );
};

export default RecommendedFriend;
