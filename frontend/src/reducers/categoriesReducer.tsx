import {GET_CATEGORIES} from '../actions/categoriesAction';

interface CategoryBody {
    data : Object;
    type : string;
}

export default function posts(state : Object = {}, action : CategoryBody) {
    const {data} = action;

    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                data
            };
        default:
            return state;
    }
}