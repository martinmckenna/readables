import * as React from 'react';
import '../styles/body.css';

// import components
import Posts from '../components/Posts/Posts';

const SingleCategory = (props : any) => {
    const category : string = location
        .pathname
        .replace('/', '');
    return (
        <div className="homepage-wrapper">
            <h1 className="page-header">{category}</h1>
            <Posts selectedCategory={category}/>
        </div>
    );
};

export default SingleCategory;