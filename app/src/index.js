import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import router from './router';
import './global/css/webflow.css';
import './global/css/index.css';

ReactDOM.render(
  router,
  document.getElementById('root')
);
