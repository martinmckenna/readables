import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import componenets
import App from './App';

// import redux and react-redux bindings
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// import reducers
import reducer from './reducers/rootReducer';

// import redux middleware
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

// import react-router and react-router-redux bindings
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

// react-router
import {Route} from 'react-router';

// Create a browser history
const history : any = createHistory();

// declare middleware
const loggerMiddleware = createLogger();
const historyMiddleware = routerMiddleware(history);

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware, historyMiddleware));

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </ConnectedRouter>
</Provider>, document.getElementById('root')as HTMLElement);
