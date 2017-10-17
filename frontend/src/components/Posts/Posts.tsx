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
    sortBy = (field : any, reverse : any, primer : any) => {

        let key = primer
            ? function (x : any) {
                return primer(x[field]);
            }
            : function (x : any) {
                return x[field];
            };

        reverse = !reverse
            ? 1
            : -1;

        return function (a : number, b : number) {
            return a = key(a),
            b = key(b),
            reverse * (+ (a > b) - + (b > a));
        };
    }
    render() {
        const sortedArray : any = this
            .props
            .posts
            .sort(this.sortBy('voteScore', true, parseInt));
        return (
            <ul className="post-list">
                <h2>Posts</h2>
                {sortedArray.map((eachPost : any) => {
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