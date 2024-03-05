// 094 함수를 return 
// 화살표 함수를 두 번 사용하는 방법을 커링(curring) 
const returnFunction = () => (a, b) => a + b; 
const plus = returnFunction(); 
//내부적으로 두 개의 파라미터를 가지는 함수 
console.log(plus(10,20));




/* 095 재귀함수 countdown
특정 조건이 만족할 때까지 실행한 결과를 다시 한 번 
자신에게 넘겨주면서 자신을 다시 호출하는 함수. 
*끝내는 조건을 잘 지정해줘야 한다.*/
const countdown = (value) => {
    console.log('value: ', value);
    if(value===0) return value;
    return countdown(value -1);
};
//console.log('result: ', countdown(20));




// 096 재귀함수 1~n까지 더하기 
const sumNumber = (start, end, accumulator) =>{
    if(start > end) return accumulator;
    return sumNumber(start+1, end, accumulator+start);
};
console.log('result: ', sumNumber(1,10,0));




// 097 재귀함수 factorial (팩토리얼)
const factorial = (n)=> {
    if(n===0) return 1;
    return n * factorial(n-1);
};
console.log(factorial(4));




/* 098 재귀함수, 피보나치 수열 
0과 1로 시작하며, 그 다음 숫자부터는 
앞의 두 수의 합이 되는 수열을 피보나치 수열이라고 한다.
*/
const fibonacci = (num) => {
    if(num <= 1) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
};
for (let i = 0; i < 10; i+=1) {
    console.log(fibonacci(i));
}




// 099 재귀함수로 합계 구하기 
const scores = [85, 95, 76];
// 배열 요소들의 합을 구하는 예제
const sum = (list, total, length) => {
    if(length === list.length) return total;
    return sum(list, total + list[length], length + 1);
};
console.log('sum: ', sum(scores,0,0)); //256




// 100 재귀함수로 평균 구하기 
const scores2 = [85, 95, 76];
const average = (list, total, length) => {
    if(length === list.length) return total / length;
    return average(list, total + list[length], length + 1);
};
console.log('average: ', average(scores, 0,0));