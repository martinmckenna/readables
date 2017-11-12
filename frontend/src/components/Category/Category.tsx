import * as React from 'react';
import {connect} from 'react-redux';
import './category.css';

import {push} from 'react-router-redux';

const Category = (props : any) => {
    return (
        <ul className="category-list">
            <h2>Categories</h2>
            {props
                .categories
                .map((eachCategory : any) => {
                    return (
                        <li
                            onClick={() => {
                            props.dispatch(push(`/${eachCategory.name}`));
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
};

const mapStateToProps = (state : any, ownProps : any) : any => {
    return state;
};

export default connect(mapStateToProps)(Category);