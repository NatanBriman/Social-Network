import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Feed from '../../../../Components/Feed';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import { findById } from '../../../../Utils/Helpers';
import { SelectedFriendContext } from '../../SelectedFriendContext';
import Friend from './Friend';

const FriendsFeed = ({ paperStyle }) => {
  const { friends } = useSelector(userSelector);
  const [selectedFriend, setSelectedFriend] = useContext(SelectedFriendContext);

  useMemo(() => {
    (friends.length === 0 || !findById(friends, selectedFriend?.id)) && setSelectedFriend(null);
  }, [friends, selectedFriend]);

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '70vh' }}
      title='My Friends'
      items={friends}
      component={(friend) => <Friend friend={friend} onClick={() => setSelectedFriend(friend)} />}
      emptyText="You didn't add any friends yet"
    />
  );
};

export default FriendsFeed;
