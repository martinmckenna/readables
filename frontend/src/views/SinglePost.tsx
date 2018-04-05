import * as React from 'react';

// material-ui components
import RaisedButton from 'material-ui/RaisedButton';

// import components
import {connect} from 'react-redux';
import {getCategories} from '../actions/categoriesAction';
import {getSinglePost} from '../actions/postsAction';

class SinglePost extends React.Component < any,
any > {
    state = {
        loading: true
    };
    componentDidMount() {
        this
            .props
            .boundGetSinglePost(this.props.match.params.postId)
            .then(() => {
                this.setState({loading: false});
            });
        this
            .props
            .boundGetCategories();
    }
    render() {
        console.log(this.props);
        return (
            <div className="singlepost-wrapper">
                {(this.state.loading)
                    ? <p>Loading...</p>
                    : <div>
                        <h1>{this.props.posts[0].title}</h1>
                        <p>Posted on {new Date(this.props.posts[0].timestamp).toDateString()}</p>
                        <p>By {this.props.posts[0].author}</p>
                        <RaisedButton label="Edit"/>
                        <RaisedButton label="Delete"/>
                        <div>{this.props.posts[0].body}</div>
                    </div>}
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