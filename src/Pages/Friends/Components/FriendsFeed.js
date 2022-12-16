import { useSelector } from 'react-redux';
import Feed from '../../../Components/Feed';
import UserCard from '../../../Components/UserCard';
import { userSelector } from '../../../Redux/Features/UserSlice';

const FriendsFeed = ({ style }) => {
  const { friends } = useSelector(userSelector);

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '70vh', minHeight: '40vh' }}
      title='My Friends'
      items={friends}
      component={(friend) => <UserCard user={friend} />}
      emptyText="You didn't add any friends yet"
    />
  );
};

export default FriendsFeed;
