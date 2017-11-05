import {combineReducers} from 'redux';
import categories from './categoriesReducer';
import posts from './postsReducer';
import comments from './commentsReducer';

// react-router-redux reducer
import {routerReducer} from 'react-router-redux';

export default combineReducers({categories, posts, comments, routerReducer});