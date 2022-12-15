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
    new UserDTO(
      3,
      'Rotem Avraham',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU'
    ),
    new UserDTO(
      4,
      'Ruti Sinay',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU'
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
