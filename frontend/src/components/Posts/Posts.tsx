import * as React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import {getAllPosts} from '../../actions/postsAction';

class Posts extends React.Component < any,
any > {
    componentDidMount() : void {
        this
            .props
            .boundGetPosts();
    }
    render() {
        return (
            <ul className="post-list">
                <h2>Posts</h2>
                {this
                    .props
                    .posts
                    .map((eachPost : any) => {
                        return (
                            <li key={eachPost.id}>
                                <h4>{eachPost.title}</h4>
                                <span>{new Date(eachPost.timestamp).toDateString()}, {eachPost.author}, {eachPost.voteScore}</span>
                            </li>
                        );
                    })}
            </ul>
        );
    }
}

const mapStateToProps = (state : Object) => {
    return state;
};

const mapDispatchToProps = (dispatch : any) => {
    return {
        boundGetPosts: () => dispatch(getAllPosts())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);