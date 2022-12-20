import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/NavBar/NavBar';
import RouterView, { loginRequiredRoutes } from './Router/Router';
import { LOGIN_ROUTE } from './Utils/Constants';

const App = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === LOGIN_ROUTE;

  return (
    <>
      {!isLoginPage && <NavBar routes={loginRequiredRoutes} />}

      <RouterView />

      <ToastContainer
        autoClose={1500}
        position='bottom-left'
        pauseOnHover={false}
        draggable={false}
        theme='dark'
      />
    </>
  );
};

export default App;
