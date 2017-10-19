import * as React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import {getAllPosts} from '../../actions/postsAction';
import {ChevronTop, ChevronBottom} from 'react-bytesize-icons';

class Posts extends React.Component < any,
any > {
    componentDidMount() : void {
        this
            .props
            .boundGetPosts();
    }
    sortBy = (field : string, reverse : any, primer : any) => {

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
                            <h3>{eachPost.title}</h3>
                            <span><ChevronTop height={18} strokeWidth='10%' width={18}/>{eachPost.voteScore}<ChevronBottom strokeWidth='10%' height={18} width={18}/></span>
                            <p>Posted on {new Date(eachPost.timestamp).toDateString()}</p>
                            <p>by {eachPost.author}</p>
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