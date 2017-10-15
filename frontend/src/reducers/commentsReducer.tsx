import {
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT,
    GET_COMMENT,
    GET_COMMENTS_FOR_POST
} from '../actions/commentsAction';

interface CommentBody {
    type : string;
    commentDetails : any;
    data : any;
    id : any;
}

export default function posts(prevState : any = [], action : CommentBody) {
    const {commentDetails, data, id} = action;

    switch (action.type) {
        case ADD_COMMENT:
            // the only issue with this is if the previous state contains a bunch of
            // comments that are in another post, it will concat those comments with these
            // ones, but it shouldn't be an issue because we don't want to show comments
            // unless we're on the post page
            return prevState.concat([commentDetails]);
        case DELETE_COMMENT:
            return prevState.filter((eachComment : any) => eachComment.id !== id);
        case EDIT_COMMENT:
            return prevState.map((eachComment : any) => {
                if (eachComment.id === id) {
                    eachComment = data;
                }
                return eachComment;
            });
        case VOTE_COMMENT:
            return prevState;
        case GET_COMMENT:
            return prevState;
        case GET_COMMENTS_FOR_POST:
            return data;
        default:
            return prevState;
    }
}