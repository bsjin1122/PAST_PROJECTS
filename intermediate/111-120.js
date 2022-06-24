// 111 map() 예제 
// define 
const listEmployee = [
    {name: 'mumin', age: 31, salary: 4000},
    {name: 'mickey', age: 28, salary: 3300},
    {name: 'kitty', age: 33, salary: 4200},
];

//process
const raisedSlaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSlaryList.forEach( salary => {
        console.log('salary : %d', salary);
});




// 112 reduce() 함수 사용하기 
/* 해당 배열의 가장 첫 번째 인덱스부터
마지막 인덱스까지의 값에 대한 누적 계산을 통해 하나의 결과를 내보내는 함수. */
const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => (a + b));
const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);

//console.log('sum : ', sum);
//console.log('sumWithInitValue : ', sumWithInitValue);

//연습2(MDN) 
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => 
    previousValue + currentValue, initialValue);

console.log(sumWithInitial);
// expected output: 10



//연습3
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15
// 0+1+2+3+4+5 = 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result2);  // 25
// 10+1+2+3+4+5 = 15





// 113 reduce() 예제
const students = [
    {name: 'kang', age: 32, score: 85},
    {name: 'hyeon', age: 31, score: 71},
    {name: 'hyeri', age: 29, score: 92},
];
const scores1 = students.map(student => student.score);
const sum1 = scores1.reduce((a,b)=> a+b, 0);
console.log('sum1: ', sum1);

/*  map: 원본 데이터에서 처리 대상 데이터를 분리하여 새로운 데이터 셋을 만들어 줌 
    reduce: 새로운 데이터 셋을 전달된 함수를 이용하여 계산하고 결과를 추출하게 된다.
- 만약 원본 데이터를 그대로 계산에 이용한다면, 
데이터에 대한 복잡한 접근, 원본 데이터 손실 가능성 등 여러 문제가 있을 수 있다.*/




// 114 .filter(), .map(), .reduce() 함수 예제 
// 점수가 80점 이상인 학생 필터링 하기 
const upper80StudentsSum = students
    //json 객체 중 score가 80을 초과하는 경우만 필터링하여 넘기게 됨
    .filter(student => student.score > 80) 
    // 객체 배열에서 score 값만을 가져와 새로운 배열을 리턴한다.
    .map(student=> student.score)
    // 배열 원소의 합을 리턴함.
    .reduce((a, b)=> (a + b));

console.log('sum: ', upper80StudentsSum);




// 115 합계 구하기 예제 
const employeeList = [
    {name : 'kim', age: 31, department: 'development'},
    {name : 'seo', age: 30, department: 'design'},
    {name : 'han', age: 35, department: 'development'},
];

const developerAgeList = employeeList
    .filter(employee => employee.department ==='development')
    .map(employee => employee.age);
console.log(developerAgeList.reduce((a,b)=> a + b));




// 116 평균 구하기 
const students3 = [
    {name: 'park', age: 32, score: 88},
    {name: 'jeong', age: 31, score: 91},
    {name: 'seo', age: 39, score: 92},
    {name: 'lee', age: 30, score: 46},
    {name: 'min', age: 28, score: 87},
    {name: 'jin', age: 29, score: 88},
    {name: 'kang', age: 27, score: 94},
];

// 나이 21~30 미만 점수 평균 구하기 
const between21to30StudentsAverage = students3
    .filter(student => student.age >= 21 && student.age < 30)
    .map(student => student.score)
    .reduce((previous, current, index, array) => previous + (current / array.length), 0);
console.log('average: ', between21to30StudentsAverage);




// 117 Promise 프로미스
// new Promise((resolve, reject) => {})
// console.log('-----------------------');
// const promiseFirst = new Promise(resolve => resolve(1)) //resolve()에 값을 넣는 것이 return 이라고 생각.
//     .then(result => `${result + 10}`); // 그 다음에 실행되는 코드 
// const promiseSecond = new Promise(resolve => resolve(1))
//     .then(result => `${result + 20}`);
//                                         //result 에 1이 들어온다. 
// Promise.all([promiseFirst, promiseSecond]).then(result => console.log(result));

/*
비동기 처리는 자원을 효율적으로 사용하고 속도를 높이는 방법으로 많이 사용된다.
비동기로 실행할 때는 리턴값이 없는 콜백함수를 많이 사용한다. 
이 방식은 함수형 프로그래밍과 유사하다. 

함수형 프로그래밍은 return 값이 없는 프로그래밍 방식이라고 생각하면 접근하기 좋다. 
그래서 callback(콜백)함수를 써서 다음에 실행할 함수를 파라미터로 넘겨주는 방식을 사용한다.

이 방식의 문제점은 여러 가지 함수를 사용하면 콜백에 콜백이 계속 이어져 코드의 가독성이 떨어져 
개발하는 데 실수할 여지가 많다. 

프로미스는 이 문제를 해결하기 위해 나왔다. 
이렇게 Promise를 이용하면 콜백 중첩을 좀 더 보기 쉽게 작성할 수 있다.
코드의 가독성을 높이고, 에러처리와 디버깅 작업을 수월하게 할 수 있다.
 */


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 3000);
  });
  
  promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // expected output: [object Promise]





// 118 Promise.all() 후처리하기
const promiseFirst = new Promise(resolve => resolve(1))
      .then(result => `${result + 10}`)

const promiseSecond = new Promise(resolve => resolve(2))
      .then(result => `${result + 20}`)

// 여러 개의 비동기 처리가 모두 끝난 후에 특정 로직을 실행하고 싶을 때 
// 프로미스들의 리턴값을 배열에 넣어 .then()쪽으로 보내준다.
Promise.all([promiseFirst, promiseSecond]).then((result)=>{
    console.log('result: ', result);
    console.log('sum: ', Number(result[0])+ Number(result[1]));
});




// 119 exports 
const printHello = () => console.log('hello~'); // export 할 함수를 선언.
// exports.받는_쪽에서_호출할_함수이름
exports.printHello = printHello;  //함수 자체를 넘기기 때문에 ()제외

//익명함수를 바로 exports 할 수 있다.
exports.printMessage = (message) => {
    console.log(message + '!!');
}




/* Promise 코딩앙마
const pr = new Promise((resolve, reject)=> {
    //code
})*/
console.log('---------------');
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 3000);
})
pr.then(
    (result)=> {
        console.log(result + ' 가지러 가자.');
    }, //콤마 중요
    (err) =>{
        console.log('다시 주문해 주세요...');
    }
);
/*
pr. then(
    (result) => {}
).catch( //가독성에도 좋고, 에러 잡기에도 가능 
    (err) => {}
).finally(
    () => {
        console.log('---주문 끝---');
    }
)
 */
