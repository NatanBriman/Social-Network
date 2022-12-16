import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useDataFromAPI from '../../../../Hooks/useDataFromAPI';
import RecommendedFriend from './RecommendedFriends';

const RecommendedFriendsFeed = ({ style }) => {
  const [friendsRecommendations, setFriendsRecommendations] = useDataFromAPI(
    [],
    api.recommendedFriends.getAllRecommendedFriends
  );

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh', minHeight: '30vh' }}
      title='Recommended Friends'
      items={friendsRecommendations}
      component={(friend) => <RecommendedFriend friend={friend} />}
      emptyText='There are no recommended friends at the moment'
    />
  );
};

export default RecommendedFriendsFeed;
