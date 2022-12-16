import { ToastContainer } from 'react-toastify';
import NavBar from './Components/NavBar';
import RouterView from './Router/Router';
import { ROUTES } from './Utils/Constants';

const App = () => {
  return (
    <>
      <NavBar routes={ROUTES} />

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
