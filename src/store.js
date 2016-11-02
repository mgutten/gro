import { createStore } from 'redux';
import reducers from './init/reducers';

const store = createStore(reducers);
export default store;
