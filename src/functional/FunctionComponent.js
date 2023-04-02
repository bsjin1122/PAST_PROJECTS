import React from 'react';

const FunctionComponent = (props) => {
    let {contents} = props;
    
    return (
        <div>
            <h2>{contents}</h2>
        </div>
    );
};

export default FunctionComponent;