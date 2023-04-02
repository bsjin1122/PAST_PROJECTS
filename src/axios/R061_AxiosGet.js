import React from 'react';
import axios from 'axios';

const R061_AxiosGet = () => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response) => {
        console.log(response.data);
    }).catch((error)=> {console.log(error)});


    /**
     * 원할 때 then()을 사용할 수 있게 된다. 
    const getData = async () => {
        let response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
        return response.data;
    }
    
    let res = getData();
    
    res.then((data) => {
        console.log(data);
    });
    */




    return (
        <div>
            
        </div>
    );
};

export default R061_AxiosGet;