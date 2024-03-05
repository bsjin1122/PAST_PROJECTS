// 071 문자열 나누기 .split()
const dateString = '2022-06-23 12:12:00';
const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];
// ['2022-06-23', '12:12:00']
console.log(date);
console.log(time);
const result = 'abc'.split('b'); //기준이 되는 문자 
console.log(result);




// 072 문자열 추출하기 .substring()
// 문자열 n번째에서 m번째까지 추출한다.
const string = 'abcdefghijklmnopqrstuvwxyz';
const substring1 = string.substring(0,4); // abcd
const substring2 = string.substring(8,11); // ijk
const substring3 = string.substring(24,25); // y




// 073 숫자로 바꾸기 Number()
const order1 = { no: 1, productName: '티셔츠', price: '30000'};
const order2 = { no: 2, productName: '청바지', price: '45000'};
const order3 = { no: 3, productName: '신발', price: '55.70'};
const order4 = { no: 4, productName: '선글라스', price: '120.80'};

const concatenate = order1.price + order2.price; //3000045000
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10); //75000 
const sumParseInt = (parseInt(order3.price, 10)+ parseInt(order4.price, 10)); //175 소수점 없어짐
const sumNumber = Number(order3.price) + Number(order4.price); //176.5
console.log('----------------------------');




/*  074 정규표현식(regexp) 이스케이프 
    정규표현식을 이용해 문자열에서 내가 필요한 부분만 골라낼 수 있다. 
    /<정규표현식>/g 형식을 사용하면 문자열 전체에서 해당 부분을 찾을 수 있다.
*/
const string1 = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string1.replace(/<h1>/g, '');
console.log('result1: ', result1);
const result2 = string1.replace(/<h1>/g, '').replace(/<\/h1>/g,'');
console.log('result2:', result2);
/* \는 연산자, 특수문자, 예약어 앞에 사용해서 연산자가 아니고, 문자열이라고 알려주기 위해 사용합니다.
 /는 특수문자이기 때문에 앞에 \를 사용해서 escape 해줍니다. 
 이스케이프는 일반 문자열로 인식하게 한다는 뜻입니다. */




 
/*  075 정규표현식(regexp) .점
     점(.)은 한 개의 문자를 의미합니다. 
*/
const string2 = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result3 = string2.replace(/<..>/g, '');
const result4 = string2.replace(/<.../g, '');
console.log('<..>  :', result3);
console.log('<...  :', result4);




// 076 정규 표현식(regexp) {0,1} 중괄호
const string3 = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceH1 = string3.replace(/<.{0,1}h1>/g, ''); //0개 또는 1개 
const replaceTags = stringDiv.replace(/<.{0,4}>/g, ''); //0~4개
console.log(replaceH1);  
console.log(replaceTags); //어떤 글자가 0~4개가 있고 >로 끝나는 패턴을 의미




// 077 정규 표현식(regexp) []
const string4 = '(<h1>:::특별가 - 99,000원:::</h1>)';
const replacedBracket = string4.replace(/[()]/g,''); //대괄호 안쪽에 넣은 문자들을 모두 찾아서 바꾸어줌
const replacedBracketOrSlashHyphenComma = string4.replace(/[()/\-,]/g,''); //-하이픈과 /슬래시를 없애는 예제
// - 기호를 매칭할 때 \- 사용한 이유는 -가 정규표현식에서 연산자이기 때문에 escape 사용
console.log('바꾸기 전 --->', string);
console.log('() 없애기 ---> ', replacedBracket);
console.log('/- 없애기 ---> ', replacedBracketOrSlashHyphenComma);





// 078 정규표현식 .match()
// 문자열에서 특정 패턴을 추출하는 방법
const text = 'hello my name is greendev';
const matched = text.match(/[a-l]{1,3}/g); //a~l 까지 1개 이상 3개 이하의 문자열 추출
console.log(matched);




// 079 정기적으로 실행하기 
// setInterval(() => {console.log('안뇽')}, 10000);
const printBye = () => {console.log('bye')}; //2초에 1번씩 bye 출력
//setInterval(printBye, 2000);




/* 080 몇 초 후에 실행하기 setTimeout(fn, milsec)
   특정 함수를 정해진 시간 이후 실행한 후 종료 
   ex) 특정 동작을 지연시켜서 실행하고 싶은 상황이나, 
   특정 시간 후 페이지를 이동하게 하는 등 상황에서 사용된다.
*/
setTimeout(() => {
// 3초 후에 hello를 한 번 출력하고 종료하기
console.log('hello~') }, 3000);