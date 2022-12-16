import { useSelector } from 'react-redux';
import Feed from '../../../Components/Feed';
import { userSelector } from '../../../Redux/Features/UserSlice';
import Friend from './Friend';

const FriendsFeed = ({ style }) => {
  const { friends } = useSelector(userSelector);

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '70vh', minHeight: '40vh' }}
      title='My Friends'
      items={friends}
      component={(friend) => <Friend friend={friend} />}
      emptyText="You didn't add any friends yet"
    />
  );
};

export default FriendsFeed;
