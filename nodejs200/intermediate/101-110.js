/* 101 closer 클로저 
클로저는 내부함수가 참조하는 외부함수의 지역변수가 
외부함수가 리턴된 이후에도 유효성이 유지될 때, 이 내부함수를 클로저라고 한다.*/
function grandParent(g1, g2){
    const g3 = 3;
    return function parent(p1, p2){
        const p3 = 33;
        return function child(c1, c2){ //클로저 함수
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
};

const parentFunction = grandParent(1,2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111,222));




// 102 합성함수 : 함수 여러 개를 합쳐서 쓰는 방법
const multiple5 = x => x * 5;
const add10 = x => x + 10;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

// (20 + 10) * 5
console.log(multiple5(add10(20)));//150

// (10 + 20)- 40
console.log(minus(plus(10,20),40));  //-10




// 103 커링 (curring)
/* 여러 개의 파라미터를 갖는 함수가 있을 때 그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법 */
const add = x => y => x + y;
const addTo10 = add(10);
console.log(addTo10(20));
console.log(add(10)(20));
// add(10) 
// const addTo10 = y => 10 + y; 가 리턴




// 104 커링 curring 예제 1
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);




const { log } = require('console');
// 105 커링 curring 예제2
const fs = require('fs');

const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data)=> {
   // console.log('path+fileName: ', path+fileName);
    if(err) throw err;
    console.log(data.toString());
});
const thisDirOpenFileAndPring = openFileAndPrint('intermediate/');
const otherDirOpenFileAndPrint = openFileAndPrint('es6/');

thisDirOpenFileAndPring('node.txt');
otherDirOpenFileAndPrint('011-020.js');




// 106 프리디케이트 predicate 
// 함수이지만 부울 결과를 돌려주는 함수  
// true 인지 false 인지 예측을 해준다는 의미
const isApple = (fruit) => {
    if(fruit === 'apple') return true;
    return false;
} 
console.log(isApple('apple'));




// 107 프리디케이트로 정렬 .sort(predicate)
const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFistBiggerThenSecond = (first, second) => {
    if(first > second) return true;
    return false;
};
const sortedNumbers = numbers.sort(isFistBiggerThenSecond);
console.log(sortedNumbers);
/* sort가 true 인 경우에 위치가 바뀌고, false인 경우는 위치가 바뀌지 않습니다. 
자리가 바뀌는 것을 swap(스왑).*/




// 108 filter()함수 사용하기 
const ages = [11, 12, 13, 16, 21, 31];

const upper16 = ages.filter(age => age > 16);
const upper13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16: ', upper16);
console.log('upper13: ', upper13);
console.log('between12And21: ', between12And21);




// 109 filter() 예제 
const students = [
    {name : 'suzy', age: 20, math: 82, english : 90},
    {name : 'min', age: 26, math: 68, english : 95},
    {name : 'hana', age: 23, math: 73, english : 80},
    {name : 'sky', age: 22, math: 89, english : 87},
    {name : 'blue', age: 27, math: 100, english : 99},
    {name : 'poo', age: 29, math: 95, english : 75},
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student=> student.math> 90&& student.english > 70);

console.log('mathUpper80: ', mathUpper80);
console.log('mathUpper80AndEnglishUpper70: ', mathUpper80AndEnglishUpper70);




// 110 map() 함수 사용하기 
// define 
const list = [1,2,3];
// process
const multipledList = list.map(item => item * 10);
multipledList.forEach(item => console.log(item));
console.log(multipledList);