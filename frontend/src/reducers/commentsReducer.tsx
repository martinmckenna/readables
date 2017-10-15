import {ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, VOTE_COMMENT, GET_COMMENT} from '../actions/commentsAction';

interface CommentBody {
    comment : Object;
    type : string;
}

export default function posts(state : Object = {}, action : CommentBody) {
    const {comment} = action;

    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comment
            };
        case DELETE_COMMENT:
            return {state};
        case EDIT_COMMENT:
            return {state};
        case VOTE_COMMENT:
            return {state};
        case GET_COMMENT:
            return {state};
        default:
            return state;
    }
}