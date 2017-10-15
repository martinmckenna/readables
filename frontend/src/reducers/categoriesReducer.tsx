import {GET_CATEGORIES} from '../actions/categoriesAction';

interface CategoryBody {
    category : Object;
    type : string;
}

export default function posts(state : Object = {}, action : CategoryBody) {
    const {category} = action;

    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                category
            };
        default:
            return state;
    }
}