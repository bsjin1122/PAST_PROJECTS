/* async
Promise 객체를 좀 더 쉽게 다룰 수 있게 고안된 문법이다. 
async 를 선언한 함수는 항상 Promise 객체를 반환한다. 
*/
const greet = async () => {
    return 'hello';
    // return Promise.resolve('hello');
}
// greet().then(console.log('오케이!'));
console.log(greet()); // Promise { 'hello' }





/* await (async 함수 안에서만 사용할 수 있는 await 키워드) */
const function1 = async () => {
const promise = new Promise((resolve, reject) => {setTimeout(() => resolve("완료!"), 1000)});
const result = await promise; 
// 원래라면, promise.then(()=>{})을 통해 비동기를 받아야하지만, await 키워드로 직관적으로 이어졌다.   
console.log(result); // "완료!" 
}
function1();

/* 비동기 - Promise 객체로 처리하고, 
async/await 는 비동기를 동기식으로 처리하는 방법이다. */
const promise2 = async() =>{ 
 // async을 지정해주면 Promise를 리턴하는 함수로 만들어준다.
 const result = await Promise.resolve("chicken \\^0^/"); // 프라미스 객체의 then결과를 바로 받는다.
 return console.log(result);
}   
promise2();

/*
async/await 을 사용하면 await가 대기를 처리해주기 때문에 .then 이 거의 필요하지 않습니다.
여기에 더하여 promise.catch 대신 일반 try..catch를 사용할 수 있다는 장점도 생깁니다.
항상 그러한 것은 아니지만, promise.then 을 사용하는 것보다 
async/await을 사용하는 것이 대개는 더 편리합니다. 
*/