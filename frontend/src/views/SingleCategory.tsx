import * as React from 'react';
import '../styles/body.css';

// import components
import Posts from '../components/Posts/Posts';

const SingleCategory = (props : any) => {
    return (
        <div className="homepage-wrapper">
            <h1 className="page-header">{props
                    .whichCategory
                    .charAt(0)
                    .toUpperCase() + props
                    .whichCategory
                    .slice(1)}</h1>
            <Posts whichCategory={props.whichCategory}/>
        </div>
    );
};

export default SingleCategory;