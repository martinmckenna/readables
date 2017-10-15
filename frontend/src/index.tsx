import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {getCommentsForPost, editComment} from './actions/commentsAction';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
// const randNum = Math.random(); const date = Date.now(); store
// .dispatch(getAllPosts())   .then(() =>
// store.dispatch(votePost(0.17391470694837663, 'upVote')));
// store.dispatch(deletePost('8xf0y6ziyjabvozdd253nd')); 8xf0y6ziyjabvozdd253nd

store
  .dispatch(getCommentsForPost('8xf0y6ziyjabvozdd253nd'))
  .then(() => store.dispatch(editComment('894tuq4ut84ut8v4t8wun89g', {
    timestamp: Date.now(),
    body: 'Hi there. IM A NEWER COMMENT!'
  })));
// .then(() => store.dispatch(deleteComment(0.038898733315715806))); .then(() =>
// store.dispatch(addComment({id: randNum, timestamp: date, body: 'this a new
// comment', author: 'marty', parentId: '111'})));

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
