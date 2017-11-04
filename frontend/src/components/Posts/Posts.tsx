import * as React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import {getAllPosts, votePost} from '../../actions/postsAction';
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
                <div className="home-sort-by-wrapper">
                    <label className="label-home-sort-by" htmlFor="home-sort-by">Sort By:</label>
                    <select name="home-sort-by" id="home-sort-by">
                        <option value="Hello">Hello</option>
                    </select>
                </div>
                {sortedArray.map((eachPost : any) => {
                    return (
                        <li key={eachPost.id}>
                            <h3>{eachPost.title}</h3>
                            <span>
                                <a
                                    className="voteIcon"
                                    onClick={() => this.props.boundVotePost(eachPost.id, 'upVote')}>
                                    <ChevronTop height={12} strokeWidth="20%" width={18}/>
                                </a>
                                {eachPost.voteScore}
                                <a
                                    className="voteIcon"
                                    onClick={() => this.props.boundVotePost(eachPost.id, 'downVote')}>
                                    <ChevronBottom height={12} strokeWidth="20%" width={18}/>
                                </a>
                            </span>
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
        boundGetPosts: () => dispatch(getAllPosts()),
        boundVotePost: (id : string, option : string) => dispatch(votePost(id, option))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);