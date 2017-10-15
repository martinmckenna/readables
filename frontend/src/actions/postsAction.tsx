import * as api from '../utils/api';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_POSTS_IN_CATEGORY = 'GET_POSTS_IN_CATEGORY';

// action creators
export function addPost(postDetails : Object) {
    return function (dispatch : any) {
        return api
            .addPost(postDetails)
            .then(() => dispatch({type: ADD_POST, postDetails}))
            .catch((e : any) => `error: ${e}`);
    };
}

export function getAllPosts() : any {
    return function (dispatch : any) {
        return api
            .getAllPosts()
            .then((data : any) => dispatch({type: GET_POSTS, data}))
            .catch((e : any) => `error: ${e}`);
    };
}

export function deletePost(id : any) : any {
    return function (dispatch : any) {
        return api
            .deletePost(id)
            .then((data : Object) => dispatch({
                type: DELETE_POST
            }, data))
            .catch((e : any) => `error: ${e}`);
    };
}