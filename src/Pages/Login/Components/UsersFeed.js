import api from '../../../Api/Api';
import Feed from '../../../Components/Feed';
import useLocalStorageFromAPI from '../../../Hooks/useLocalStorageFromAPI';
import { LOCAL_STORAGE_KEYS } from '../../../Utils/Constants';
import LoginAsUserCard from './LoginAsUserCard';

const UsersFeed = ({ paperStyle }) => {
  const [users, _, isLoading] = useLocalStorageFromAPI(
    [],
    api.users.getAllUsers,
    LOCAL_STORAGE_KEYS.users
  );

  return (
    <Feed
      paperStyle={paperStyle}
      title='Users to Login As'
      items={users}
      component={(user) => <LoginAsUserCard user={user} />}
      emptyText='There are no users to login as'
      isLoading={isLoading}
      isVertical={false}
    />
  );
};

export default UsersFeed;
