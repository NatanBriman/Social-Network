import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useDataFromAPI from '../../../../Hooks/useDataFromAPI';
import FriendRecommendation from './FriendRecommendation';

const FriendsRecommendationsFeed = ({ style }) => {
  const [friendsRecommendations, setFriendsRecommendations] = useDataFromAPI(
    [],
    api.friendsRecommendations.getAllFriendsRecommendations
  );

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
