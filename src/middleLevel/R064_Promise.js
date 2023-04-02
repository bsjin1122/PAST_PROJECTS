import React, {useEffect} from 'react';

const R064_Promise = () => {
    /**
     * promise에는 대기, 이행, 거부의 개념
     * 대기 -> 이행 상태로 변할 때 then 함수 안의 코드가 실행된다. 
     * resolve만 받을 경우, 이행함수로 사용된다. 
     * promise then 함수를 사용하면 콜백 함수의 계단식 복잡한 코드 형태보다 가독성 있게 구현할 수 있다. 
     */
    useEffect(()=> {
        new Promise(resolve => {
            setTimeout(()=> {resolve('react');}, 3000);
        })
        .then((result)=> {
            console.log('1: ' + result);
            return result + 200;
        })
        .then(result2 => {console.log('2: ' + result2)})
    });

    return (
        <div>
            
        </div>
    );
};

export default R064_Promise;