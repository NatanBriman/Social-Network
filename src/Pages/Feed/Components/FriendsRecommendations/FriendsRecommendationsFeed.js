import { useEffect, useState } from 'react';
import Feed from '../../../../Components/Feed';
import FriendRecommendation from './FriendRecommendation';

const getFriendsRecommendationsFromAPI = () => {
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

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FRIENDS_RECOMMENDATIONS);
    }, 1000);
  });
};

const initializeFriendsRecommendations = async (callback) => {
  const friendsRecommendations = await getFriendsRecommendationsFromAPI();

  callback(friendsRecommendations);
};

const FriendsRecommendationsFeed = ({ style }) => {
  const [friendsRecommendations, setFriendsRecommendations] = useState([]);

  useEffect(() => {
    initializeFriendsRecommendations(setFriendsRecommendations);
  }, []);

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh', minHeight: '30vh' }}
      title='Recommended Friends'
      items={friendsRecommendations}
      component={(friend) => <FriendRecommendation friend={friend} />}
    />
  );
};

export default FriendsRecommendationsFeed;
