// import * as api from '../utils/api';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENTS_FOR_POST = 'GET_COMMENT_FOR_POSTS';

// action creators
export function addCommentToPost(commentDetails : Object) {
    return {type: ADD_COMMENT, commentDetails};
}