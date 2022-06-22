// 001-009까지 es5 작성하면서 vscode에 문제가 생겨 삭제하고 이후부터 올립니다.
// 이해가 된 부분은 제외하고 올려요!

// 010 숫자와 문자
const string10 = '10';
const string20 = '20';
const number10 = 10;
const number20 = 20;

console.log('string: %s', string10 + string20); //1020
console.log('number: %d', number10 + number20); //30
console.log('string + number : %s', string10 + number20); //문자 1020


// 011 숫자인지 판단하기 .isNaN()
// 숫자면 false를 return 숫자가 아닌 다른 타입이면 True를 
const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

console.log('isNaN123:', isNaN123);
console.log('isNaNMinus123:', isNaNMinus123);
console.log('isNaN234:', isNaN234);
console.log('isNaNHello:', isNaNHello);


// 해당 문자열 찾기 indexOf()
const string = 'hello';
const string2 = 'hellolololo';
const string3 = 'The method then selects elements from the start argument.';

console.log('hel:', string.indexOf('hel'));
console.log('lo:', string.indexOf('lo'));
console.log('method:', string3.indexOf('method'));
console.log('bye:', string3.indexOf('bye'));
// bye가 없기 때문에 -1을 리턴한다. 




//017 배열에 값 넣기 
const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);

const arTexts =[];
arTexts.push('hello','welcome','bye');

console.log(arNumbers);
console.log(arTexts);



// 021 typeof
const pi = 3.14;
const name = 'greendev';
console.log('hello : %s', typeof 'hello');
console.log('"20" : %s', typeof '20');
console.log('pi : %s', typeof pi);
console.log('name : %s', typeof name);
console.log('[]: %s', typeof []); //object
console.log('{}: %s', typeof {}); //object

