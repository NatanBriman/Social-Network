import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/UserSlice';
import { removeObjectFromArrayById, showAlert } from '../../../../Utils/Helpers';

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

    showAlert('success', 'Friend added successfully!');
  };

  return (
    <UserCard user={friend}>
      <IconButton onClick={handleAddFriend}>
        <AddIcon />
      </IconButton>
    </UserCard>
  );
};

export default RecommendedFriend;
