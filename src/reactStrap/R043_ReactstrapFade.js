import React, {useState} from 'react';
import {Button, Fade} from 'reactstrap';

const R043_ReactstrapFade = (props) => {
    const [mystate, setMyState] = useState({fadeInout:true});
    const toggle = (e) => {
        setMyState({fadeInout: !mystate.fadeInout});
    }
    return (
        <div>
           <Button color="success" onClick={toggle}>Fade In/Out</Button>
           <Fade in={mystate.fadeInout} tag="h1">
            dfhfjakdhdajkflhgdkjghdkj hdfjhjkafhdjkghajgkdahjkfahdk
            </Fade> 
        </div>
    );
};

export default R043_ReactstrapFade;