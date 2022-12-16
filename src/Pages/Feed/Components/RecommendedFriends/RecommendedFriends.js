import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../Components/UserCard';
import { userActions } from '../../../../Redux/Features/UserSlice';

const RecommendedFriend = ({ friend }) => {
  const dispatch = useDispatch();

  const addFriend = () => {
    const { addFriend } = userActions;

    dispatch(addFriend(friend));
  };

  return (
    <UserCard user={friend}>
      <IconButton onClick={addFriend}>
        <AddIcon />
      </IconButton>
    </UserCard>
  );
};

export default RecommendedFriend;
