import React, {useEffect} from 'react';

const R065_Promise = () => {
    useEffect(()=> {
        new Promise((resolve, reject)=> {
            reject(Error("Error Info"));
        }).then(result => console.log('then ' + result))
        .catch(result => console.log("catch : "+ result));
    }, []);
    
    return (
        <div>
            
        </div>
    );
};

export default R065_Promise;