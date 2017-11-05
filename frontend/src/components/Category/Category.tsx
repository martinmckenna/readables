import * as React from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../../actions/categoriesAction';
import './category.css';

import {push} from 'react-router-redux';

class Category extends React.Component < any,
any > {
    componentDidMount() : void {
        this
            .props
            .boundGetCategories();
    }
    render() {
        return (
            <ul className="category-list">
                <h2>Categories</h2>
                {this
                    .props
                    .categories
                    .map((eachCategory : any) => {
                        return (
                            <li
                                onClick={() => {
                                this
                                    .props
                                    .dispatch(push(`/${eachCategory.name}`));
                                this
                                    .props
                                    .changeCategory(eachCategory.name);
                            }}
                                key={eachCategory.name}
                                className="eachCategory">
                                {eachCategory
                                    .name
                                    .charAt(0)
                                    .toUpperCase() + eachCategory
                                    .name
                                    .slice(1)}
                            </li>
                        );
                    })}
            </ul>
        );
    }
}

const mapStateToProps = (state : any, ownProps : any) : any => {
    return state;
};

const mapDispatchToProps = (dispatch : any) : any => {
    return {
        dispatch,
        boundGetCategories: () => dispatch(getCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);