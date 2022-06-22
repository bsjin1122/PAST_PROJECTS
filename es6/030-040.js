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
