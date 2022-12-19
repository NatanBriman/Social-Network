import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../Redux/Features/User/UserSlice';
import { LOGIN_ROUTE } from '../Utils/Constants';
import { showToast } from '../Utils/Helpers';

const LoginProtectedRoute = ({ children }) => {
  const user = useSelector(userSelector);

  if (Object.keys(user).length === 0) {
    showToast('Please login first', 'warning');

    return <Navigate to={LOGIN_ROUTE} />;
  }

  return children;
};

export default LoginProtectedRoute;
