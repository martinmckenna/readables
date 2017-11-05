import * as React from 'react';

// import components
import Category from '../components/Category/Category';
import Posts from '../components/Posts/Posts';

const Home = (props : any) => {
    return (
        <div className="homepage-wrapper">
            <Category/>
            <Posts/>
        </div>
    );
};

export default Home;