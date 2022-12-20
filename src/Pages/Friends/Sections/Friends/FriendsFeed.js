import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Feed from '../../../../Components/Feed';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import SelectedFriendContext from '../../SelectedFriendContext';
import Friend from './Friend';

const FriendsFeed = ({ paperStyle }) => {
  const { friends } = useSelector(userSelector);
  const [_, setSelectedFriend] = useContext(SelectedFriendContext);

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '70vh' }}
      title='My Friends'
      items={friends}
      component={(friend) => (
        <Friend className='clickable' friend={friend} onClick={() => setSelectedFriend(friend)} />
      )}
      emptyText="You didn't add any friends yet"
    />
  );
};

export default FriendsFeed;
