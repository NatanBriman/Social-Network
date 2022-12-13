import { useSelector } from 'react-redux';
import { userSelector } from './Redux/Features/UserSlice';

const App = () => {
  const user = useSelector(userSelector);

  return <div className='App'>{user.username()}</div>;
};

export default App;
