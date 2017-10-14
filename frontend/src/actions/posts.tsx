export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';
export const GET_POST = 'GET_POST';

// typing interface
interface AddPostBody {
    id : string;
    timestamp : string;
    title : string;
    body : string;
    author : string;
    category : string;
}

// action creators
export function addPost({
    id,
    timestamp,
    title,
    body,
    author,
    category
} : AddPostBody) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category
    };
}