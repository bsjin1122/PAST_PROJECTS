import React from 'react';

const PropsComp = (props) => {
    return (
        <div>
            <h2>[THIS IS IMPORTED COMPONENT]</h2>
            {props.children}  
        </div>
    );
};

export default PropsComp;