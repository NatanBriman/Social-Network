import NavBar from './Components/NavBar/NavBar';
import RouterView from './Router/Router';
import { ROUTES } from './Utils/Constants';

const App = () => {
  return (
    <>
      <NavBar routes={ROUTES} />
      <RouterView />
    </>
  );
};

export default App;
