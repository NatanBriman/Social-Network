import Feed from '../../../../Components/Feed';
import FriendRecommendation from './FriendRecommendation';

const FriendsRecommendationsFeed = ({ style }) => {
  const FRIENDS_RECOMMENDATIONS = [
    {
      id: 2,
      username: 'Natan Briman',
      image:
        'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      username: 'Rotem Avraham',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
    },
    {
      id: 4,
      username: 'Ruti Sinay',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
    },
  ];

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh', minHeight: '30vh' }}
      title='Recommended Friends'
      items={FRIENDS_RECOMMENDATIONS}
      component={(friend) => <FriendRecommendation friend={friend} />}
    />
  );
};

export default FriendsRecommendationsFeed;
