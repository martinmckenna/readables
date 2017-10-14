import {ADD_POST, DELETE_POST, EDIT_POST, VOTE_POST, GET_POST} from '../actions/posts';

interface PostBody {
    post : Object;
    type : string;
}

export default function posts(state : Object = {}, action : PostBody) {
    const {post} = action;

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post
            };
        case DELETE_POST:
            return {state};
        case EDIT_POST:
            return {state};
        case VOTE_POST:
            return {state};
        case GET_POST:
            return {state};
        default:
            return state;
    }
}