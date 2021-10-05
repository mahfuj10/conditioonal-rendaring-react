import React from 'react';

const Conditional = (props) => {

    const { family } = props;

    if (!family) {
        console.log("false")
    }
    else {
        console.log("true");
    }

    return (
        <div>
            <h3>conditional</h3>
        </div>
    );
};

export default Conditional;