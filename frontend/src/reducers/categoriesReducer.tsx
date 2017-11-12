import {GET_CATEGORIES} from '../actions/categoriesAction';

interface CategoryBody {
    data : Object;
    type : string;
}

export default function categories(prevState : any = [], action : CategoryBody) {
    const {data} = action;

    switch (action.type) {
        case GET_CATEGORIES:
            return data;
        default:
            return prevState;
    }
}