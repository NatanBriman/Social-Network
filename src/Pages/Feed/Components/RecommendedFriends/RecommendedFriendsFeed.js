import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useLocalStorageFromAPI from '../../../../Hooks/useLocalStorageFromAPI';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../../../Utils/Constants';
import RecommendedFriend from './RecommendedFriends';

const RecommendedFriendsFeed = ({ paperStyle }) => {
  const [recommendedFriends, setRecommendedFriends, isLoading] = useLocalStorageFromAPI(
    [],
    api.recommendedFriends.getAllRecommendedFriends,
    LOCAL_STORAGE_KEYS.recommendedFriends
  );

  const { friends } = useSelector(userSelector);
  const friendsIds = useMemo(() => friends.map(({ id }) => id), [friends]);

  const filteredRecommendedFriends = useMemo(
    () => recommendedFriends.filter(({ id }) => !friendsIds.includes(id)),
    [recommendedFriends, friendsIds]
  );

  return (
    <Feed
      paperStyle={paperStyle}
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
