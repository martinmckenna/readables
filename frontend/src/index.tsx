import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {addPost} from './actions/postsAction';

const store = createStore(reducer);

console.log(store.getState());

// Every time the state changes, log it Note that subscribe() returns a function
// for unregistering the listener
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addPost({title: 'hello', body: 'hello world'}));

unsubscribe();

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
