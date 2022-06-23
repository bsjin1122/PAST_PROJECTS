// 034 자주 쓰는 반복문 for of
const userList = [
    {name: 'greendev', age: 31, score: 85},
    {name: 'yello', age: 25, score: 78},
    {name: 'red', age: 65, score: 100}
];

for (const user of userList) {
    // list에 있는 데이터 개수만큼 하나씩 뽑아서 반복문을 실행함
    console.log('user: ', user);
}




// 035 .forEach()
// 값을 하나씩 뽑아서 바로 함수에 넣어서 계산할 때 편하다.
const listUser = [
    {name: 'mimi', age: 20},
    {name: 'suzy', age: 24},
    {name: 'jimin', age: 28}
];

listUser.forEach((user)=>{
    console.log(user);
})
console.log('--------------------');




// 036 while 
const number = 9;
let value = 1;
while (value < 10) {
    console.log(number * value);
    value +=1 ;
}
/* for: 조건식, 반복을 위한 변수의 초기값과 증감조건을 한눈에 볼 수 있어
 정해진 만큼 반복되는 코드를 작성할 때 쓰인다.
 
 while: 조건식만 나타냄으로써 반복 그 자체에 의미를 두는 코드를 작성 */




// 037 날짜 시간 생성하기
const today = new Date();
const date1 = new Date(2022, 9-1, 18, 20,30); //year, month, day, hour, min
// month 0-11 
console.log(today.toLocaleString());
console.log(date1.toLocaleString());