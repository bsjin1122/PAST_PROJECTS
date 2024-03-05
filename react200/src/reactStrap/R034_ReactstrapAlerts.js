import React, {Component} from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap';

const R034_ReactstrapAlerts = () => {
    return (
        <div>
            <Alert color="dark">
                Simple Alert [color:light]
            </Alert>
            <UncontrolledAlert color="warning">
                Uncontroleed Alert [color:warning]
            </UncontrolledAlert>
        </div>
    );
};

export default R034_ReactstrapAlerts;