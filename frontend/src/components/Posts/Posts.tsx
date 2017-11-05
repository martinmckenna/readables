import * as React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import {getAllPosts, votePost} from '../../actions/postsAction';
import {ChevronTop, ChevronBottom} from 'react-bytesize-icons';

import {push} from 'react-router-redux';

class Posts extends React.Component < any,
any > {
    state = {
        sortBy: 'voteScore',
        sortByReverse: true // whether or not we want to sort reverse order
    };
    componentDidMount() : void {
        console.log(this.props);
        this
            .props
            .boundGetPosts();
    }
    handleSelectChange = (e : any) : any => {
        let index = e.target.selectedIndex;
        let selectedElement = e.target.childNodes[index]; // we want to get the 'data-reverse' attr of the selected <option>
        let reverse = JSON.parse(selectedElement.getAttribute('data-reverse')); // doing JSON parse because getAttribute is returning a string and not a boolean
        this.setState({sortBy: e.target.value, sortByReverse: reverse});
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
        return (
            <ul className="post-list">
                <h2>Posts</h2>
                <div className="home-sort-by-wrapper">
                    <label className="label-home-sort-by" htmlFor="home-sort-by">Sort By:</label>
                    <select
                        name="home-sort-by"
                        id="home-sort-by"
                        onChange={(e) => {
                        this.handleSelectChange(e);
                    }}>
                        {/* data-reverse says whether or not we want the list in ascending or descending order */}
                        <option data-reverse={true} value="voteScore">Vote Score (more popular first)</option>
                        <option data-reverse={false} value="voteScore">Vote Score (less popular first)</option>
                        <option data-reverse={true} value="timestamp">Date (newest first)</option>
                        <option data-reverse={false} value="timestamp">Date (older first)</option>
                    </select>
                </div>
                {this
                    .props
                    .posts
                    .sort(this.sortBy(this.state.sortBy, this.state.sortByReverse, parseInt))
                    .filter((eachPost : any, index : number, originalArray : any) => {
                        return (this.props.whichCategory)
                            ? eachPost.category === this.props.whichCategory
                            : originalArray;
                    })
                    .map((eachPost : any) => {
                        return (
                            <li key={eachPost.id}>
                                <h3
                                    onClick={() => {
                                    this
                                        .props
                                        .dispatch(push(`/${eachPost.category}/${eachPost.id}`));
                                }}>{eachPost.title}</h3>
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

const mapStateToProps = (state : Object, ownProps : any) => {
    return state;
};

const mapDispatchToProps = (dispatch : any) => {
    return {
        dispatch,
        boundGetPosts: () => dispatch(getAllPosts()),
        boundVotePost: (id : string, option : string) => dispatch(votePost(id, option)) // option will either be 'upVote' or 'downVote'
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);