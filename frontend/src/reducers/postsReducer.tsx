import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    VOTE_POST,
    GET_POSTS,
    GET_POSTS_IN_CATEGORY
} from '../actions/postsAction';

interface PostBody {
    postDetails : Object;
    type : string;
}
// reducers take the previous state and the action as args then returns the new
// state never mutate state. Just make a copy and return the copy
export default function posts(prevState : Object = {}, action : PostBody) {
    const {postDetails} = action;

    switch (action.type) {
        case ADD_POST:
            return {
                ...prevState,
                post1: postDetails
            };
        case DELETE_POST:
            return {prevState};
        case EDIT_POST:
            return {prevState};
        case VOTE_POST:
            return {prevState};
        case GET_POSTS:
            return {prevState};
        case GET_POSTS_IN_CATEGORY:
            return {prevState};
        default:
            return prevState;
    }
}