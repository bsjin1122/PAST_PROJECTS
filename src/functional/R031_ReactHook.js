import React, {useState, useEffect} from 'react';

const R031_ReactHook = () => {
    const [contents, setContents] = useState('[This is react!]');
   
    useEffect(()=>{
        // html이 화면에 그려진 이후에 실행 
        // 최초 페이지가 로딩될 때 한 번 실행, setContents() 함수로 state값이 변경되면 한 번 더 실행된다. 
        console.log('useEffect');
    });
   
    return (
        <div>
          <h2>{contents}</h2>
          <button onClick={()=>setContents('[THIS IS HOOK]')}>버튼</button>  
        </div>
    );
};

export default R031_ReactHook;