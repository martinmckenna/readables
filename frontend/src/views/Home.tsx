import * as React from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions/categoriesAction';
import {getAllPosts} from '../actions/postsAction';

// import components
import Category from '../components/Category/Category';
import Posts from '../components/Posts/Posts';

class Home extends React.Component < any,
any > {
    componentDidMount() {
        this
            .props
            .boundGetCategories();
        this
            .props
            .boundGetPosts();
    }
    render() {
        return (
            <div className="homepage-wrapper">
                <Category selectCategory={this.props.selectCategory}/>
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
        boundGetPosts: () => dispatch(getAllPosts()),
        boundGetCategories: () => dispatch(getCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);