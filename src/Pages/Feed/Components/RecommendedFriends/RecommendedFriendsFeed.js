import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useDataFromAPI from '../../../../Hooks/useDataFromAPI';
import { userSelector } from '../../../../Redux/Features/UserSlice';
import RecommendedFriend from './RecommendedFriends';

const RecommendedFriendsFeed = ({ style }) => {
  const [recommendedFriends, setRecommendedFriends, isLoading] = useDataFromAPI(
    [],
    api.recommendedFriends.getAllRecommendedFriends
  );

  const { friends } = useSelector(userSelector);
  const friendsIds = useMemo(() => friends.map(({ id }) => id), [friends]);

  const filteredRecommendedFriends = useMemo(
    () => recommendedFriends.filter(({ id }) => !friendsIds.includes(id)),
    [recommendedFriends, friendsIds]
  );

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh' }}
      title='Recommended Friends'
      items={filteredRecommendedFriends}
      component={(friend) => (
        <RecommendedFriend friend={friend} setRecommendedFriends={setRecommendedFriends} />
      )}
      emptyText='There are no recommended friends at the moment'
      isLoading={isLoading}
    />
  );
};

export default RecommendedFriendsFeed;
