// 052 ex) arrow function
const studentList = [
    {name: 'jiji', age: 20, math: 86, science: 76},
    {name: 'jane', age: 23, math: 76, science: 100},
    {name: 'tom', age: 25, math: 58, science: 96},
];
const plus = (a, b) => a + b;
studentList.forEach(student => console.log(`${student.name} total: ${plus(student.math, student.science)}`));




// 053 콜백함수 callback()
const sum = (a, b) => a + b;
const printResult =  (result) => { //콜백함수 
    console.log(`결과는 ${result} 입니다.`);
}
const calculationAndPrint = (calculationResult, callback) => {
    callback(calculationResult);
}
calculationAndPrint(sum(10,20), printResult); //특정함수에 파라미터로 전달된 함수를 말한다.
// 실제 개발을 하다 보면 callback에 callback을 여러 번 겹쳐서 사용하는 코드가 나오는 경우가 있다.
// 이어져 있는 형태가 체인같다고 하여 이런 형태를 체이닝(chaining)이라고 한다.





// 055 난수 생성(random) : 무작위 값, 랜덤, 랜덤값
/* Test 데이터를 만들거나, 게임에서 데미지를 계산할 때, 
여러 대의 서버 중 몇 번 서버로 요청을 보내줄 지 등 난수를 사용할 일이 많다. */
const randomNumber = Math.random(); //0 이상 1 미만의 숫자 
const zeroToNine = Math.floor(Math.random() * 10, 10);  // 0 to 9 , 두번째 인자는 10진수 의미
const twentyToThirty = Math.floor(Math.random() * ((30-20)+1), 10) + 20; // 20 to 30 11가지 
const oneToTen = Math.floor(Math.random()*10, 10)+1; // 1 to 10 
//10과 20 사이의 숫자 만드는 함수
const makeRandom = (min, max) => Math.floor(Math.random()*((max-min)+1),10) + min; 

console.log(randomNumber);
console.log('zeroToNine',zeroToNine);
console.log('twentyToThirty',twentyToThirty);
console.log('oneToTen',oneToTen);

for (let value = 1; value < 10; value++){
    console.log('10 to 20 : ', makeRandom(10,20));
}





// 056 반올림 .round(number)
const number = 88.7;
const divide = 1/2;
console.log('type: %s %d', typeof number, number);
console.log('round', typeof number, Math.round(number)); //89
console.log('divide: %d, %d', divide, Math.round(divide)); //0.5, 1




// 058 절대값 abs()
console.log('------------------------');
console.log(Math.abs('-1')); // 1
console.log(Math.abs(-3.141592)); // 3.141592
console.log(Math.abs([2])); // 2
console.log(Math.abs([1,2])); // Nan
console.log(Math.abs({})); // Nan
console.log(Math.abs(null)); // 0
console.log(Math.abs('')); // 0
console.log(Math.abs([])); // 0




/* 059 거듭제곱 pow()
- 어떤 지수 함수가 있을 때 거듭제곱의 대상이 되는 값을 밑, 
  밑을 몇 번 거듭제곱할 지 정하는 값을 지수 
- 인수를 두 개 받는데 (밑, 지수) 
- 예를 들어 2의 제곱을 구하고 싶을 때, Math.pow(2,2) */
console.log('-------------------------------');
console.log(Math.pow(7,2)); //49
console.log(Math.pow(2,10)); //1024
console.log(Math.pow(8, 1/3)); //2
console.log(Math.pow(8, -1/3)); //0.5
console.log(Math.pow(-7, 2)); //49
console.log(Math.pow(-7, 1/2)); 
//Nan 음수의 제곱근은 무리수로 실수가 아니다. (실수의 범위값만 출력해줌)
console.log(Math.pow(2, 0.5)); //1.4142135623730951




// 060 제곱근 sqrt(), 세제곱근 cbrt()함수
/* pow 함수의 두번째 인자로 1/2, 1/3을 주는 방식으로 이용할 수 있지만, 사용 목적이 분명하고 
    반복적으로 값을 구해야 하는 경우 실행 속도와 코드 가독성에 도움을 줄 수 있다. */ 
console.log('-----------------');
console.log(Math.sqrt(9));//3
console.log(Math.sqrt(1));//1
console.log(Math.sqrt(0));//0
console.log(Math.sqrt(-1));//NaN
console.log(Math.cbrt(-8)); //-2
console.log(Math.cbrt(0)); //0
console.log(Math.cbrt(1)); //1
console.log(Math.cbrt(Infinity)); //Infinity