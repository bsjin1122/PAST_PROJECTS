import React from 'react';
import {Badge, Button} from 'reactstrap';

const R035_ReactstrapBadge = () => {
    return (
        <div>
            <h1>PRODUCT NAME <Badge color="secondary"> hit</Badge></h1>
            <Button color="light" outline>
                Accessor <Badge color="dark">4</Badge>
            </Button>
            <Badge color="danger" pill>pill</Badge>
            {/* pill 속성은 테두리를 둥글게 적용한다.  */}
            <Badge href="http://example.com" color="light">GoLink</Badge>
        </div>
    );
};

export default R035_ReactstrapBadge;