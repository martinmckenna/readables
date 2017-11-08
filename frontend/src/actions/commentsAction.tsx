import * as api from '../utils/api';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENTS_FOR_POST = 'GET_COMMENT_FOR_POSTS';

// action creators
export function addComment(commentDetails : Object) {
    return function (dispatch : any) {
        return api
            .addCommentToPost(commentDetails)
            .then(() => dispatch({type: ADD_COMMENT, commentDetails}))
            .catch((e : any) => `error adding comment: ${e}`);
    };
}
export function getCommentsForPost(id : any) : any {
    return function (dispatch : any) {
        return api
            .getCommentsForPost(id)
            .then((data : any) => dispatch({type: GET_COMMENTS_FOR_POST, data}))
            .catch((e : any) => `error getting comments for this post: ${e}`);
    };
}

export function deleteComment(id : any) : any {
    return function (dispatch : any) {
        return api
            .deleteComment(id)
            .then((data : any) => dispatch({type: DELETE_COMMENT, id}))
            .catch((e : any) => `error deleting comment: ${e}`);
    };
}

export function editComment(id : any, newCommentDetails : Object) : any {
    return function (dispatch : any) {
        return api
            .editComment(id, newCommentDetails)
            .then((data : Object) => dispatch({type: EDIT_COMMENT, data, id}))
            .catch((e : any) => `error editing comment: ${e}`);
    };
}

export function voteComment(id : any, option : string) : any {
    return function (dispatch : any) {
        console.log(option);
        return api
            .voteOnComment(id, option)
            .then((data : Object) => dispatch({type: VOTE_COMMENT, id, data}))
            .catch((e : any) => `error voting on comment: ${e}`);
    };
}