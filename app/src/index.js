import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import router from './router';
import './webflow.css';
import './index.css';

ReactDOM.render(
  router,
  document.getElementById('root')
);
