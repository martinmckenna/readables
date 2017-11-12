import * as React from 'react';

// import components
import {connect} from 'react-redux';
import {getCategories} from '../actions/categoriesAction';
import {getSinglePost} from '../actions/postsAction';

class SinglePost extends React.Component < any,
any > {
    componentDidMount() {
        this
            .props
            .boundGetSinglePost(this.props.match.params.postId);
        this
            .props
            .boundGetCategories();
    }
    render() {
        console.log(this.props);
        return (
            <div className="singlepost-wrapper">
                <h1>{this.props.posts[0].title}</h1>
                <div>{this.props.posts[0].body}</div>
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
        boundGetCategories: (category : string) => dispatch(getCategories()),
        boundGetSinglePost: (id : string) => dispatch(getSinglePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);