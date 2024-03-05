// 081 정기적으로 실행 취소하기 clearInterval(fn)
// setInterval 함수의 동작을 끝내는 함수이다. 

// 1초에 한번씩 'hello' 출력하기 
const playInterval = setInterval(()=> console.log('hello'), 1000);
setTimeout(() => {
   clearInterval(playInterval) 
}, 5000); //5초 시점에 함수동작이 종료




// 085 정렬하기 여러 조건 .sort()
const studentList = [
    {name: 'jiji', age: 20, math: 85, english: 90},
    {name: 'tom', age: 18, math: 82, english: 100},
    {name: 'sam', age: 29, math: 94, english: 91},
    {name: 'mike', age: 24, math: 55, english: 83},
    {name: 'sally', age: 27, math: 99, english: 77},
];

studentList.sort((beforeStudent, nextStudent)=>{
    // 1, -1 오름차순
    if(beforeStudent.age> nextStudent.age) return 1; 
    else if(beforeStudent.age < nextStudent.age) return -1;
    // -1, 1 오름차순
    else if(beforeStudent.math > nextStudent.age) return -1;
    else if(beforeStudent.math < nextStudent.age) return 1;
    
    return 0;
});
console.log(studentList);




// 086 JSON 오브젝트 특정 필드 기준으로 정렬 
// studentList.sort((now, next)-> now.math - next.math);




// 087 배열에서 필요한 부분만 뽑기 .slice()
// 배열 .slice(시작, 미만)
const strings = [
    'timeoutsRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpshots',
    'dunks',
    'layups'
];
const sliced = strings.slice(1,3);
console.log(sliced);




/* 090 배열 shift(), unshift()
배열에서 첫 번째 값을 뽑고 넣는 방법 
인덱스로는 0번이고, 뽑은 값은 배열에서 사라진다.*/
const destination = ['런던', '파리','로마'];
console.log(destination);

//shift
console.log(destination.shift());
console.log(destination);
//unshift
console.log(destination.unshift('뉴욕'));
console.log(destination);
//pop
console.log(destination.pop());
console.log(destination);
/* .pop()은 스택에서 사용하는 연산, 티슈. First in Last out, 후입선출 구조.
    티슈에서 휴지를 한 장 뽑아 쓴 다음에는 분명히 티슈곽에 한 장이 줄어 있을 것이다.*/