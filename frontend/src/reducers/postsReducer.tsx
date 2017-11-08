import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    VOTE_POST,
    GET_SINGLE_POST,
    GET_POSTS,
    GET_POSTS_IN_CATEGORY
} from '../actions/postsAction';

interface PostBody {
    postDetails : any;
    type : string;
    data : any;
    id : any;
}
// reducers take the previous state and the action as parameters then returns
// the new state. never mutate state. Just make a copy and return the copy.
// please note that concat() is a non-mutating method
export default function posts(prevState : any = [], action : PostBody) {
    const {postDetails, id, data} = action;

    switch (action.type) {
        case ADD_POST:
            return prevState.concat([postDetails]);
        case DELETE_POST:
            return prevState.filter((post : any) => post.id !== id);
        case EDIT_POST:
            return prevState.map((eachPost : any) => {
                if (eachPost.id === id) {
                    eachPost = data;
                }
                return eachPost;
            });
        case VOTE_POST:
            return prevState.map((eachPost : any) => {
                if (eachPost.id === id) {
                    eachPost = data;
                }
                return eachPost;
            });
        case GET_SINGLE_POST:
            return data;
        case GET_POSTS:
            return data;
        case GET_POSTS_IN_CATEGORY:
            return data;
        default:
            return prevState;
    }
}