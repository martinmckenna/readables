import * as React from 'react';

import {connect} from 'react-redux';
import {getCategories} from '../actions/categoriesAction';
import {getPostsInCategory} from '../actions/postsAction';

// import components
import Posts from '../components/Posts/Posts';

class SingleCategory extends React.Component < any,
any > {
    route = this
        .props
        .routerReducer
        .location
        .pathname
        .replace('/', '');
    componentDidMount() {
        this
            .props
            .boundGetCategories();
        this
            .props
            .boundGetPostsInCategory(this.route);
    }
    render() {
        return (
            <div className="homepage-wrapper">
                <h1 className="page-header">{this.route}</h1>
                <Posts/>
            </div>
        );
    }

}

const mapStateToProps = (state : any, ownProps : any) : any => {
    return state;
};

const mapDispatchToProps = (dispatch : any) : any => {
    return {
        dispatch,
        boundGetPostsInCategory: (category : string) => dispatch(getPostsInCategory(category)),
        boundGetCategories: () => dispatch(getCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);