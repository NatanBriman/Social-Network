import { useSelector } from 'react-redux';
import Feed from '../../../../Components/Feed';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import RecommendedFriend from './RecommendedFriends';

const RecommendedFriendsFeed = ({ paperStyle }) => {
  const { recommendedFriends } = useSelector(userSelector);

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '80vh' }}
      title='Recommended Friends'
      items={recommendedFriends}
      component={(friend) => <RecommendedFriend friend={friend} />}
      emptyText='There are no recommended friends at the moment'
    />
  );
};

export default RecommendedFriendsFeed;
