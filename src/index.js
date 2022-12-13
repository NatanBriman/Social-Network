import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './Redux/Store';
import ThemeContext from './Theme/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeContext>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeContext>
);
