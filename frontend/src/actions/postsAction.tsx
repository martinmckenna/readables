// import * as api from '../utils/api';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_IN_CATEGORY = 'GET_POSTS_IN_CATEGORY';

// action creators
export function addPost(postDetails : Object) {
    return {type: ADD_POST, postDetails};
}