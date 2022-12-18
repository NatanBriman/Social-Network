import api from '../../../Api/Api';
import Feed from '../../../Components/Feed';
import useDataFromAPI from '../../../Hooks/useDataFromAPI';
import LoginAsUser from './LoginAsUser';

const UsersFeed = ({ paperStyle }) => {
  const [users, setUsers, isLoading] = useDataFromAPI([], api.users.getAllUsers);

  return (
    <Feed
      paperStyle={paperStyle}
      title='Users to Login As'
      items={users}
      component={(user) => <LoginAsUser user={user} />}
      emptyText='There are no users to login as'
      isLoading={isLoading}
      isVertical={false}
    />
  );
};

export default UsersFeed;
