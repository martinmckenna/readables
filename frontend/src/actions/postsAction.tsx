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
        // crucial that we return the API call, so that later we can call a .then when
        // we use the function
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
            .then((data : any) => dispatch({type: DELETE_POST, id}))
            .catch((e : any) => `error: ${e}`);
    };
}

// TODO: Change the id type to a string if the UUID ends up being a string
export function editPost(id : any, newPostDetails : Object) : any {
    return function (dispatch : any) {
        return api
            .editPost(id, newPostDetails)
            .then((data : Object) => dispatch({type: EDIT_POST, id, data}))
            .catch((e : any) => `error: ${e}`);
    };
}

export function votePost(id : any, option : string) : any {
    return function (dispatch : any) {
        return api
            .voteOnPost(id, option)
            .then((data : Object) => dispatch({type: VOTE_POST, id, data}))
            .catch((e : any) => `error: ${e}`);
    };
}

export function getSinglePost(id : any) : any {
    return function (dispatch : any) {
        return api
            .getSinglePost(id)
            .then((data : Object) => dispatch({type: GET_SINGLE_POST, id, data}))
            .catch((e : any) => `error: ${e}`);
    };
}

export function getPostsInCategory(category : any) : any {
    return function (dispatch : any) {
        return api
            .getPostsInCategory(category)
            .then((data : Object) => dispatch({type: GET_POSTS_IN_CATEGORY, data}))
            .catch((e : any) => `error: ${e}`);
    };
}