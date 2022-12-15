import Feed from '../../../../Components/Feed';
import UserDTO from '../../../../Models/User/UserDTO';
import FriendRecommendation from './FriendRecommendation';

const FriendsRecommendationsFeed = ({ style }) => {
  const FRIENDS_RECOMMENDATIONS = [
    new UserDTO(
      2,
      'Natan Briman',
      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
    ),
  ];

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh', minHeight: '30vh' }}
      title='Recommended Friends'
      items={FRIENDS_RECOMMENDATIONS}
      component={(friend) => <FriendRecommendation user={friend} />}
    />
  );
};

export default FriendsRecommendationsFeed;
