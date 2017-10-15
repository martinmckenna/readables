import * as api from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';

// action creators
export function getCategories() {
    return function (dispatch : any) {
        return api
            .getCategories()
            .then((data : any) => dispatch({type: GET_CATEGORIES, data}))
            .catch((e : any) => `error ${e}`);
    };
}