import {
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT,
    GET_COMMENT,
    GET_COMMENTS_FOR_POST
} from '../actions/commentsAction';

interface CommentBody {
    comment : Object;
    type : string;
}

export default function posts(prevState : Object = {}, action : CommentBody) {
    const {comment} = action;

    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...prevState,
                comment
            };
        case DELETE_COMMENT:
            return {prevState};
        case EDIT_COMMENT:
            return {prevState};
        case VOTE_COMMENT:
            return {prevState};
        case GET_COMMENT:
            return {prevState};
        case GET_COMMENTS_FOR_POST:
            return {prevState};
        default:
            return prevState;
    }
}