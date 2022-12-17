import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/NavBar';
import { userSelector } from './Redux/Features/User/UserSlice';
import RouterView from './Router/Router';
import { LOGIN_ROUTE, ROUTES } from './Utils/Constants';

const App = () => {
  const user = useSelector(userSelector);
  const routesInNavBar = ROUTES.filter((route) => route.loginRequired);
  const { pathname } = useLocation();
  const isLoginPage = pathname === LOGIN_ROUTE;

  return (
    <>
      {!isLoginPage && <NavBar routes={routesInNavBar} />}

      <RouterView />

      <ToastContainer
        autoClose={1500}
        position='bottom-left'
        pauseOnHover={false}
        draggable={false}
        limit={5}
        theme='dark'
        className='text-end fs-4'
        style={{ width: '30%' }}
      />
    </>
  );
};

export default App;
