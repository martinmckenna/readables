import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {getAllPosts} from './actions/postsAction';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
// const randNum = Math.random(); const date = Date.now();

store.dispatch(getAllPosts());

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
