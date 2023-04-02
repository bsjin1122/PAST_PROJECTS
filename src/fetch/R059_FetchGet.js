import React, {useEffect, useState} from 'react';

const R059_FetchGet = () => {
    
    useEffect(()=> {
        fetch('http://date.jsontest.com', {
            method : "GET"    // 메소드 방식 지정
        }).then(res=>res.json()) //json으로 받을 것을 명시 
          .then(res=>{          // 실제 데이터를 상태변수에 업데이트
            console.log(1, res);
           
        });
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        
        fetch('http://date.jsontest.com', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: {a:"react", b:200}
        }).then(res => res.json()).then(res=> {console.log(res.date)});

    }, []);


    return (
        <div>
          <h1>Fetch get</h1>  
        </div>
    );
};

export default R059_FetchGet;