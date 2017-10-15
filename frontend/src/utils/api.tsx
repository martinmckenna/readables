const api : string = 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math
        .random()
        .toString(36)
        .substr(-8);
}

const headers : Object = {
    'Accept': 'application/json',
    'Authorization': token
};

// get all categories
export const getCategories = () : any => {
    // so basically this is making a request to the endpoint then getting the
    // defaultData and then getting the categories object inside defaultData
    return fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories);
};

// get all posts for a particular category
export const getPostsInCategory = (category : string) : any => {
    return fetch(`${api}/${category}/posts`, {headers}).then(res => res.json());
};

// get all posts. period.
export const getAllPosts = () : any => {
    return fetch(`${api}/posts`, {headers}).then(res => res.json());
};

// make a new post
export const addPost = (newPost : Object) : any => {
    return fetch(`${api}/posts`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newPost)
    }).then(res => res.json());
};

// get details of a single post
export const getSinglePost = (id : string) : any => {
    return fetch(`${api}/posts/${id}`, {headers}).then(data => data.json());
};

// votes on a post. option needs to be either 'upVote' or 'downVote'
export const voteOnPost = (id : string, option : string) => {
    return fetch(`${api}/posts/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({option: option})
    }).then(res => res.json());
};

export const editPost = (id : string, newContent : Object) : any => {
    return fetch(`${api}/posts/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(newContent)
    }).then(res => res.json());
};

export const deletePost = (id : any) : any => {
    return fetch(`${api}/posts/${id}`, {headers, method: 'DELETE'}).then(data => data.json());
};

// gets all comments for one post
export const getCommentsForPost = (id : string) : any => {
    return fetch(`${api}/posts/${id}/comments`, {headers}).then(data => data.json());
};

// adds a comment to a post
export const addCommentToPost = (commentDetails : Object) : any => {
    return fetch(`${api}/comments`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(commentDetails)
    }).then(data => data.json());
};

// get one comment
export const getComment = (id : string) : any => {
    return fetch(`${api}/comments/${id}`, {headers}).then(data => data.json());
};

export const voteOnComment = (id : string, option : string) : any => {
    return fetch(`${api}/comments/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({option: option})
    }).then(data => data.json());
};

// edits a comment. refer to the API docs for what should go in newDetails
export const editComment = (id : string, newDetails : Object) : any => {
    return fetch(`${api}/comments/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(newDetails)
    }).then(data => data.json());
};

export const deleteComment = (id : string) : any => {
    return fetch(`${api}/comments/${id}`, {headers, method: 'DELETE'}).then(data => data.json());
};
