import React from 'react';

import List from './List';
import AddElement from './AddElement';
import Navigation from './Navigation';

const Application = (props) => {
    return (
        <div className="container text-wrap">
            <Navigation />
            <AddElement />
            <hr />
            <List />
        </div>
    )
};

export default Application;