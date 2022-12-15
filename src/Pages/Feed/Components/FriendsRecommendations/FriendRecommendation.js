import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/UserSlice';

const FriendRecommendation = ({ user }) => {
  const dispatch = useDispatch();

  const addFriend = () => {
    const { addFriend } = userActions;
    const friendAsObject = user.getInstanceAsObject();

    dispatch(addFriend(friendAsObject));
  };

  return (
    <UserCard user={user}>
      <IconButton onClick={addFriend}>
        <AddIcon />
      </IconButton>
    </UserCard>
  );
};

export default FriendRecommendation;
